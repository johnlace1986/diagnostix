import { Routes, RouterModule } from '@angular/router';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [
  { path: 'unauthorised', component: UnauthorisedComponent },
  { path: 'forbidden', component: ForbiddenComponent }
];

export const routing = RouterModule.forChild(routes);
