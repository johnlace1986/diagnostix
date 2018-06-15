import { Component } from '@angular/core';

import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'dw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dw';

  constructor(private oAuthService: OAuthService) {
    this.configureWithNewConfigApi();
  }

  private configureWithNewConfigApi() {
    
    this.oAuthService.configure({
      issuer: 'https://sso.local.galadirectory.co.uk/identity',
      redirectUri: window.location.origin + '/index.html',
      clientId: 'diagnostix.WEB',
      scope: 'openid profile roles email',
    });

    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin({
      customHashFragment: location.hash
    });
  }
}
