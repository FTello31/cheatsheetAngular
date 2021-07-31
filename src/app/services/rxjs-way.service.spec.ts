import { TestBed } from '@angular/core/testing';

import { RxjsWayService } from './rxjs-way.service';

describe('RxjsWayService', () => {
  let service: RxjsWayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsWayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
