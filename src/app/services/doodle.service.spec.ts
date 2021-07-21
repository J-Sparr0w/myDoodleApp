import { TestBed } from '@angular/core/testing';

import { DoodleService } from './doodle.service';

describe('DoodleService', () => {
  let service: DoodleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoodleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
