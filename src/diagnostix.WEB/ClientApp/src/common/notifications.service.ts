import { Injectable } from '@angular/core';
import { Notification } from './notification';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationsService {
  private notification = new Subject<Notification>();

  public observable = this.notification.asObservable();

  public add(notification: Notification) {
    this.notification.next(notification);
  }
}
