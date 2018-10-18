import { TestBed } from '@angular/core/testing';

import { ResolveMatchListService } from './resolve-match-list.service';

describe('ResolveMatchListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveMatchListService = TestBed.get(ResolveMatchListService);
    expect(service).toBeTruthy();
  });
});
