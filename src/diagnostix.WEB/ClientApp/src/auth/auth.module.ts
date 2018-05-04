import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './auth-guard';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class AuthModule { }
