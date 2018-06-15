import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'dw-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private oAuthService: OAuthService, private router: Router) {

  }

  ngOnInit() {
  }

  login(): void {
    this.oAuthService.initImplicitFlow();
  }
}
