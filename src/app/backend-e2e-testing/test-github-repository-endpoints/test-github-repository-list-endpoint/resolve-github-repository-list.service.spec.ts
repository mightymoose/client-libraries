import { TestBed } from '@angular/core/testing';

import { ResolveGithubRepositoryListService } from './resolve-github-repository-list.service';

describe('ResolveGithubRepositoryListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveGithubRepositoryListService = TestBed.get(ResolveGithubRepositoryListService);
    expect(service).toBeTruthy();
  });
});
