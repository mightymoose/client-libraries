import { TestBed } from '@angular/core/testing';

import { ResolveMatchInstanceListService } from './resolve-match-instance-list.service';

describe('ResolveMatchInstanceListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveMatchInstanceListService = TestBed.get(ResolveMatchInstanceListService);
    expect(service).toBeTruthy();
  });
});
