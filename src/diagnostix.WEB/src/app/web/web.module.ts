import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../shared/auth.guard';
import { WebComponent } from './web.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'web',
        component: WebComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '**', component: HomeComponent }
        ]
      },
      { path: '**', redirectTo: 'web' }
    ]),
  ],
  declarations: [
    HomeComponent,
    WebComponent
  ]
})
export class WebModule { }
