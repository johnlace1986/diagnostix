import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../shared/auth.guard';
import { WebComponent } from './web.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
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
    ])
  ],
  declarations: [
    HomeComponent,
    WebComponent,
    NavMenuComponent
  ]
})
export class WebModule {
}
