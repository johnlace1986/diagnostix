import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { SecurityService } from './security.service';
import { Roles } from './roles';

@Directive({ selector: '[roleIf]' })
export class RoleIfDirective {
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private securityService: SecurityService) {

    securityService.userAuthenticatedEvent.subscribe(() => this.updateDom());
    securityService.noLongerAuthenticatedEvent.subscribe(() => this.updateDom());
  }

  private _requiredRole: String;
  private _showing = false;

  @Input()
  public set roleIf(requiredRole: String) {

    this._requiredRole = null;

    switch (requiredRole) {
      case Roles.View.key:
        this._requiredRole = Roles.View.role;
        break;
      case Roles.Add.key:
        this._requiredRole = Roles.Add.role;
        break;
      case Roles.Edit.key:
        this._requiredRole = Roles.Edit.role;
        break;
      case Roles.Delete.key:
        this._requiredRole = Roles.Delete.role;
        break;
    }

    this.updateDom();
  }

  private updateDom() {
    let shouldShow = false;

    if (this._requiredRole && this.securityService.currentUserHasRole(this._requiredRole)) {
      shouldShow = true;
    }

    if (shouldShow) {
      if (!this._showing) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this._showing = true;
      }
    } else {
      this.viewContainer.clear();
      this._showing = false;
    }
  }
}
