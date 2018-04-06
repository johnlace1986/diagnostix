import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { SecurityService } from '../security.service';

@Component({
  selector: 'unauthorised',
  templateUrl: './unauthorised.component.html'
})
export class UnauthorisedComponent {
  constructor(private authService: SecurityService, private location: Location) { }

  public Login() {
    this.authService.startSigninMainWindow();
  }

  public goback() {
    this.location.back();
  }
}
