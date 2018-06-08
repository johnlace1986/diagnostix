import { TestBed, inject } from '@angular/core/testing';

import { MockOAuthServiceService } from './mock-oauth-service.service';

describe('MockOAuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockOAuthServiceService]
    });
  });

  it('should be created', inject([MockOAuthServiceService], (service: MockOAuthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
