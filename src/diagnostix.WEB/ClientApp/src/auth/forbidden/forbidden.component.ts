import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'forbidden',
  templateUrl: './forbidden.component.html'
})
export class ForbiddenComponent {
  constructor(private location: Location) { }

  public goback() {
    this.location.back();
  }
}
