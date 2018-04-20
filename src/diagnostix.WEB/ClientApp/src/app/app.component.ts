import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  title = 'app';
 
  menuState:string = 'out';

  constructor(private oAuthService: OAuthService) {

    // URL of the SPA to redirect the user to after login
    this.oAuthService.redirectUri = "http://localhost:4200/";
    this.oAuthService.silentRefreshRedirectUri = "http://localhost:4200/";
    this.oAuthService.postLogoutRedirectUri = "http://localhost:4200/";

    // The SPA's id. The SPA is registerd with this id at the auth-server
    this.oAuthService.clientId = "diagnostix.WEB";

    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    this.oAuthService.scope = "openid profile roles email";
    this.oAuthService.responseType = "id_token token";
    this.oAuthService.silentRefreshTimeout = 5000;

    // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
    // OAuth2-based access_token
    this.oAuthService.oidc = true;

    // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
    // instead of localStorage
    this.oAuthService.setStorage(sessionStorage);

    // The name of the auth-server that has to be mentioned within the token
    this.oAuthService.issuer = "https://sso.local.galadirectory.co.uk/identity";

    // Load Discovery Document and then try to login the user
    this.oAuthService.loadDiscoveryDocument().then(() => {

      // This method just tries to parse the token(s) within the url when
      // the auth-server redirects the user back to the web-app
      // It dosn't send the user the the login page
      this.oAuthService.tryLogin({});
    });
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
