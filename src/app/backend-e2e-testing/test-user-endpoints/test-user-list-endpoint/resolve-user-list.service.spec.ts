import { TestBed } from '@angular/core/testing';

import { ResolveUserListService } from './resolve-user-list.service';

describe('ResolveUserListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveUserListService = TestBed.get(ResolveUserListService);
    expect(service).toBeTruthy();
  });
});
