import { TestBed } from '@angular/core/testing';

import { ResolveMatchDetailsService } from './resolve-match-details.service';

describe('ResolveMatchDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveMatchDetailsService = TestBed.get(ResolveMatchDetailsService);
    expect(service).toBeTruthy();
  });
});
