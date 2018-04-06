import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SecurityService } from './security.service';
import { User } from 'oidc-client';
import { NotificationsService } from '../common/notifications.service';
import { Notification } from '../common/notification';
import { NotificationType } from '../common/notification';

@Injectable()
export class AuthenticatedHttpClient {
  constructor(private http: Http, private notifications: NotificationsService, securityService: SecurityService) {

    if (securityService.currentUser) {
      this._setAuthHeaders(securityService.currentUser);
    }

    securityService.userAuthenticatedEvent.subscribe((user: User) => {
      this._setAuthHeaders(user);
    });

    securityService.noLongerAuthenticatedEvent.subscribe(() => {
      if (this.authHeaders.has(this._authKey)) {
        this.authHeaders.delete(this._authKey);
      }
    });
  }

  private authHeaders: Headers;

  public get(url: string, options?: RequestOptions): Observable<Response> {

    if (options) {
      options = this._setRequestOptions(options);
    } else {
      options = this._setRequestOptions();
    }

    return this.http.get(url, options)
      .catch((error: Response) => this._handleError(error, 'retrieving data'));
  }

  public put(url: string, data: any, options?: RequestOptions): Observable<Response> {

    const body = JSON.stringify(data);

    if (options) {
      options = this._setRequestOptions(options);
    } else {
      options = this._setRequestOptions();
    }

    return this.http.put(url, body, options).catch((error: Response) => this._handleError(error, 'updating item'));
  }

  public delete(url: string, options?: RequestOptions): Observable<Response> {

    if (options) {
      options = this._setRequestOptions(options);
    } else {
      options = this._setRequestOptions();
    }

    return this.http.delete(url, options).catch((error: Response) => this._handleError(error, 'deleting item'));
  }

  public post(url: string, data: any, options?: RequestOptions): Observable<Response> {

    const body = JSON.stringify(data);

    if (options) {
      options = this._setRequestOptions(options);
    } else {
      options = this._setRequestOptions();
    }

    return this.http.post(url, body, options).catch((error: Response) => this._handleError(error, 'sending data'));
  }

  private _handleError(error: Response, verb: String): Observable<Response> {
    if (error.status === 403 || error.status === 401) {
      this.notifications.add(new Notification(`Error occurred while ${verb} - Forbidden`,
        NotificationType.danger,
        true));

      return Observable.empty<Response>();
    }

    return Observable.throw(error);
  }

  private _setAuthHeaders(user: User) {
    this.authHeaders = new Headers();
    this.authHeaders.append(this._authKey, user.token_type + ' ' + user.access_token);
    this.authHeaders.append('Content-Type', 'application/json');
  }

  private readonly _authKey = 'Authorization';

  private _setRequestOptions(options?: RequestOptions) {

    if (options) {
      options.headers.append(this._authKey, this.authHeaders.get(this._authKey));
    } else {
      options = new RequestOptions({ headers: this.authHeaders });
    }

    return options;
  }
}
