import { Component, OnInit } from '@angular/core';
import { MockOAuthServiceService } from '../../mock-oauth-service.service';

@Component({
  selector: 'dw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private oAuthService: MockOAuthServiceService) {

  }

  ngOnInit() {
  }

  logout(): void {
    this.oAuthService.logOut();
  }

}
