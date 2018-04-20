import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OAuthModule } from 'angular-oauth2-oidc';

import { AuthGuard } from './auth-guard';

@NgModule({
  imports: [
    CommonModule,
    OAuthModule.forRoot()
  ],
  declarations: [],
  providers: [
    AuthGuard
  ]
})
export class AuthModule { }
