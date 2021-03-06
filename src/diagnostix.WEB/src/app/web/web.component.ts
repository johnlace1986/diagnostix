import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'dw-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css'],
  host: {
    '(document:click)': 'onClick($event)'
  },
  animations: [
    trigger('slideInOut', [
      state('open', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('closed', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('open => closed', animate('400ms ease-in-out')),
      transition('closed => open', animate('400ms ease-in-out'))
    ])
  ]
})
export class WebComponent implements OnInit {
 
  menuState: string = 'closed';

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.menuState = this.menuState === 'closed' ? 'open' : 'closed';
  }

  onClick($event): void {
 
    var element = $event.srcElement; 
 
    do { 
      switch (element.id) { 
        case 'btnToggleMenu': 
        case 'navMenu': 
          return; 
      } 
 
      element = element.parentNode; 
    } 
    while (element != null); 

    this.menuState = 'closed';
  }
}
