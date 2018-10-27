import { TestBed } from '@angular/core/testing';

import { ResolveMatchInstancesForMatchService } from './resolve-match-instances-for-match.service';

describe('ResolveMatchInstancesForMatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveMatchInstancesForMatchService = TestBed.get(ResolveMatchInstancesForMatchService);
    expect(service).toBeTruthy();
  });
});
