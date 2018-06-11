import { TestBed, inject } from '@angular/core/testing';

import { OAuthService } from './oauth-service.service';

describe('MockOAuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OAuthService]
    });
  });

  it('should be created', inject([OAuthService], (service: OAuthService) => {
    expect(service).toBeTruthy();
  }));
});
