import { TestBed } from '@angular/core/testing';

import { ResolveMostRecentMatchInstanceService } from './resolve-most-recent-match-instance.service';

describe('ResolveMostRecentMatchInstanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveMostRecentMatchInstanceService = TestBed.get(ResolveMostRecentMatchInstanceService);
    expect(service).toBeTruthy();
  });
});
