import { Component } from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  constructor(private oAuthService: OAuthService) {
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
