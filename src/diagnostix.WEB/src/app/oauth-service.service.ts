import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OAuthService {

  isLoggedIn: boolean = false;
  private readonly cookieName: string = 'DIAGNOSTIX_WEB_COOKIE';

  constructor() { 
  }

  private setAuthCookie(expireDays: number, value: string): void {
    let path: string = '';

    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = `expires=${d.toUTCString()}`;
    let cpath:string = path ? `; path=${path}` : '';
    document.cookie = `${this.cookieName}=${value}; ${expires}${cpath}`;
  }

  initImplicitFlow(): void {
    this.setAuthCookie(1, '1');
  }

  logOut(): void {
    this.setAuthCookie(-1, '');
    window.location.reload();
  }
  
  hasValidIdToken(): boolean {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${this.cookieName}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return true;
        }
    }
    return false;
  }
}
