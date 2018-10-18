import { TestBed } from '@angular/core/testing';

import { ResolveNextMatchService } from './resolve-next-match.service';

describe('ResolveNextMatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveNextMatchService = TestBed.get(ResolveNextMatchService);
    expect(service).toBeTruthy();
  });
});
