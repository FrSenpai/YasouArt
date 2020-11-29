import { TestBed } from '@angular/core/testing';

import { BiographieService } from './biographie.service';

describe('BiographieService', () => {
  let service: BiographieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiographieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
