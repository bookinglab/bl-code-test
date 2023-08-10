import { TestBed } from '@angular/core/testing';

import { UnsplashServiceService } from './unsplash-service.service';

describe('UnsplashServiceService', () => {
  let service: UnsplashServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsplashServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
