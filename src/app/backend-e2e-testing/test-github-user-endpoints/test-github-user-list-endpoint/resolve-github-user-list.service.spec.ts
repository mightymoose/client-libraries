import { TestBed } from '@angular/core/testing';

import { ResolveGithubUserListService } from './resolve-github-user-list.service';

describe('ResolveGithubUserListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveGithubUserListService = TestBed.get(ResolveGithubUserListService);
    expect(service).toBeTruthy();
  });
});
