import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { fail } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [    
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ],
  host: {
    '(document:click)': 'onClick($event)'
  }
})
export class AppComponent {
  title = 'app';

  menuState: string = 'out';

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  onClick(event) {

    var currentElement = event.srcElement;

    while (currentElement !== null) {
      switch (currentElement.id) {
        case 'nav-menu':
        case 'btnToggleMenu':
          return;
      }

      currentElement = currentElement.parentNode;
    };

    this.menuState = 'out';
  }
}
