import { Injectable, EventEmitter } from '@angular/core';
import { UserManager, User } from 'oidc-client';
import { authSettings } from './AuthSettings';

@Injectable()
export class SecurityService {
  public mgr = new UserManager(authSettings);
  public userAuthenticatedEvent = new EventEmitter<User>();
  public noLongerAuthenticatedEvent = new EventEmitter();
  public currentUser: User | null = null;

  constructor() {

    this.user().catch(console.log.bind(console));

    this.mgr.events.addAccessTokenExpired(() => {
      this.removeAuthenticationState();
    });

    this.mgr.events.addUserUnloaded(() => {
      this.removeAuthenticationState();
    });

    this.mgr.events.addUserSignedOut(() => {
      this.removeAuthenticationState();
    });
  }

  public currentUserHasRole(desiredRole: String): boolean {
    if (!this.currentUser || !this.currentUser.profile || !this.currentUser.profile.role) {
      return false;
    }

    return (this.currentUser.profile.role.filter(role => role === desiredRole).length === 1);
  }

  private removeAuthenticationState(): void {
    if (this.currentUser !== null) {
      this.currentUser = null;

      this.mgr.removeUser();

      this.noLongerAuthenticatedEvent.emit();
    }
  }

  public user(): Promise<User> {
    return this.mgr.getUser()
      .then((user: User) => {
        if (user) {
          this.currentUser = user;
          this.userAuthenticatedEvent.emit(user);
        } else {
          this.currentUser = null;
        }
      })
      .catch((err) => {
        console.log(err);
        this.currentUser = null;
      })
      .then(() => {
        return this.currentUser;
      });
  }

  public startSigninMainWindow() {
    this.mgr.signinRedirect()
      .catch(err => {
        console.log(err);
      });
  }

  public startSignoutMainWindow() {
    this.mgr.signoutRedirect()
      .catch(err => {
        console.log(err);
      });
  };
}
