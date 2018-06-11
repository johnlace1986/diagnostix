import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OAuthService } from '../oauth-service.service';

@Component({
  selector: 'dw-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private oAuthService: OAuthService, private router: Router) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.oAuthService.initImplicitFlow();
      this.router.navigate(['']);
    }, 2000);
  }
}
