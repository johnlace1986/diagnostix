import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { routing } from './auth.routing';
import { RoleIfDirective } from './role-if.directive';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SecurityService } from './security.service';
import { AuthActivationGuard } from './authactivationguard';
import { AuthenticatedHttpClient } from './authenticatedHttpClient';

@NgModule({
  imports: [CommonModule, RouterModule, routing],
  declarations: [UnauthorisedComponent, ForbiddenComponent, RoleIfDirective],
  exports: [RoleIfDirective]
})
export class AuthModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: AuthModule, providers: [SecurityService, AuthActivationGuard, AuthenticatedHttpClient] };
  }
}
