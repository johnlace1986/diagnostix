import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  isPinned: boolean = false;

  togglePin() {
    this.isPinned = !this.isPinned;
  }

  removePin() {
    this.isPinned = false;
  }
}
