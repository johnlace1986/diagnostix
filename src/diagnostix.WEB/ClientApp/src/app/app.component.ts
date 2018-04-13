import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { fail } from 'assert';

import { NavMenuComponent } from '../app/nav-menu/nav-menu.component';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [    
    trigger('slideInOut', [
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ],
  host: {
    '(document:click)': 'onClick($event)'
  }
})
export class AppComponent {

  constructor(private oAuthService: OAuthService) {

    // URL of the SPA to redirect the user to after login
    this.oAuthService.issuer = "https://sso.local.galadirectory.co.uk/identity";
    this.oAuthService.clientId = "diagnostix.WEB";
    this.oAuthService.scope = "openid profile roles email";
    this.oAuthService.redirectUri = "https://localhost:44356/";
    this.oAuthService.silentRefreshRedirectUri = "https://localhost:44356/";
    this.oAuthService.postLogoutRedirectUri = "https://localhost:44356/";
    this.oAuthService.responseType = "id_token token";
    this.oAuthService.silentRefreshTimeout = 5000;

    this.oAuthService.oidc = true;

    this.oAuthService.setStorage(sessionStorage);

    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLogin({});
    });
  }

  public login() {
    this.oAuthService.initImplicitFlow();
  }

  public logoff() {
    this.oAuthService.logOut();
  }

  public get loggedIn() {
    return this.oAuthService.hasValidAccessToken();
  }

  title = 'app';

  menuState: string = 'out';

  @ViewChild('navMainMenu') navMenu: NavMenuComponent;

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.navMenu.removePin();
  }

  onClick(event) {

    if (!this.navMenu.isPinned) {
      var currentElement = event.srcElement;

      while (currentElement !== null) {
        switch (currentElement.id) {
          case 'navMainMenu':
          case 'btnToggleMenu':
            return;
        }

        currentElement = currentElement.parentNode;
      };

      this.menuState = 'out';
    }
  }
}
