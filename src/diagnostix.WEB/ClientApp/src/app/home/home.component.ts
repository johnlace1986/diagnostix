import { Component } from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private oAuthService: OAuthService) {
  }

  public get name() {
    let claims = this.oAuthService.getIdentityClaims();
    if (!claims) return null;
    return claims.name;
  }
}
