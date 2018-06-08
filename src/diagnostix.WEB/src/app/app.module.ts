import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { MockOAuthServiceService } from './mock-oauth-service.service';
import { AuthGuard } from './shared/auth.guard';
import { WebModule } from './web/web.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    WebModule,
    SharedModule,
    RouterModule.forRoot([])
  ],
  providers: [
    MockOAuthServiceService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
