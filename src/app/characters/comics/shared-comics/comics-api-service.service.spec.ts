import { TestBed } from '@angular/core/testing';
import { ComicsApiServiceService } from './comics-api-service.';


describe('ComicsApiServiceService', () => {
  let service: ComicsApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicsApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
