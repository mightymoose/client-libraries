import { TestBed } from '@angular/core/testing';

import { ResolveMatchParticipationListService } from './resolve-match-participation-list.service';

describe('ResolveMatchParticipationListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveMatchParticipationListService = TestBed.get(ResolveMatchParticipationListService);
    expect(service).toBeTruthy();
  });
});
