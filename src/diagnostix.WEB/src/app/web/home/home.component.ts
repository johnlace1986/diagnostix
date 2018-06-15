import { Component, OnInit } from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'dw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private oAuthService: OAuthService) {

  }

  ngOnInit() {
  }

  logout(): void {
    this.oAuthService.logOut();
  }

}
