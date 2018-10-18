import { TestBed } from '@angular/core/testing';

import { ResolveUpdatedMatchService } from './resolve-updated-match.service';

describe('ResolveUpdatedMatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveUpdatedMatchService = TestBed.get(ResolveUpdatedMatchService);
    expect(service).toBeTruthy();
  });
});
