export class Notification {
  constructor(message: string, notificationType?: NotificationType, isDismissable?: boolean, timeout?: number) {
    this.type = notificationType;

    if (isDismissable) {
      this.isDismissable = isDismissable;
    }

    if (timeout) {
      this.timeout = timeout;
    }

    if (message) {
      this.message = message;
    }
  }

  public type = NotificationType.warning;
  public isDismissable = true;
  public timeout = 4000;
  public message = 'This is a test notification';
}

export enum NotificationType {
  success = 'success' as any,
  danger = 'danger' as any,
  info = 'info' as any,
  warning = 'warning' as any
}
