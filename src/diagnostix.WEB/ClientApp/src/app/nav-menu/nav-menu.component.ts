import { Component, Output, EventEmitter, ViewChild } from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() OnCloseMenu: EventEmitter<any> = new EventEmitter();

  pinned:Boolean = false;

  constructor(private oAuthService: OAuthService) {
  }

  closeMenu() {
    this.pinned = false;
    this.OnCloseMenu.emit(null);
  }

  togglePin() {
    this.pinned = !this.pinned;
  }

  logout() {
    this.oAuthService.logOut();    
  }

  public get loggedIn() {
    return this.oAuthService.hasValidIdToken();
  }

  public get header() {
    if (this.oAuthService.hasValidAccessToken())
      return this.oAuthService.getIdentityClaims()["name"];

    return "diagnostix.WEB";
  }
}
