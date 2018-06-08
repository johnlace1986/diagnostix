import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MockOAuthServiceService } from '../mock-oauth-service.service';

@Component({
  selector: 'dw-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private oAuthService: MockOAuthServiceService, private router: Router) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.oAuthService.initImplicitFlow();
      this.router.navigate(['']);
    }, 2000);
  }
}
