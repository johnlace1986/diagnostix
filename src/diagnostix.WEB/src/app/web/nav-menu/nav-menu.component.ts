import { Component, OnInit } from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';

import { User } from '../../shared/user';

@Component({
  selector: 'dw-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(private oAuthService: OAuthService) { }

  ngOnInit() {
  }

  public get userFullName(): string {
    var user = this.oAuthService.getIdentityClaims() as User;
    return user.name;
  }

}
