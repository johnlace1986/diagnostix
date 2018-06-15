import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AuthGuard } from './shared/auth.guard';
import { WebModule } from './web/web.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    AuthModule,
    WebModule,
    SharedModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
