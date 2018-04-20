import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private oAuthService: OAuthService, private router: Router) {}

  canActivate() {
      if (this.oAuthService.hasValidIdToken())
        return true;
    
      this.router.navigate(['/auth']);
      return false;
  }
}