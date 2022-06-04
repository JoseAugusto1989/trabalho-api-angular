import { TestBed } from '@angular/core/testing';

import { StoriesApiService } from './stories-api.service';

describe('StoriesApiService', () => {
  let service: StoriesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
