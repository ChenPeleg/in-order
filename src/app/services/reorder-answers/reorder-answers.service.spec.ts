import { TestBed } from '@angular/core/testing';

import { ReorderAnswersService } from './reorder-answers.service';

describe('ReorderAnswersService', () => {
  let service: ReorderAnswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReorderAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
