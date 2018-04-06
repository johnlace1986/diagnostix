import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SecurityService } from './security.service';
import { Roles } from './roles';

@Injectable()
export class AuthActivationGuard implements CanActivate {
  constructor(authService: SecurityService, private router: Router) {
    this.authService = authService;

    this.authService.noLongerAuthenticatedEvent.subscribe(() => {
      this.unauthorised();
    });
  }

  private authService: SecurityService;

  public canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.authService.user()
      .then((user) => {

        if (user !== null) {
          const isAddNewPage = state.url.match(/\/.*\/new$/);

          if (isAddNewPage && isAddNewPage.length > 0) {
            if (!this.authService.currentUserHasRole(Roles.Add.role)) {
              this.forbidden();

              return false;
            }
          }

          return true;
        }

        this.unauthorised();

        return false;
      });
  }

  private unauthorised(): void {
    this.router.navigate(['unauthorised']);
  }

  private forbidden(): void {
    this.router.navigate(['forbidden']);
  }
}
