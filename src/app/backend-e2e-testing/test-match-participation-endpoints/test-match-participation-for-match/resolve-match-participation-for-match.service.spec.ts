import { TestBed } from '@angular/core/testing';

import { ResolveMatchParticipationForMatchService } from './resolve-match-participation-for-match.service';

describe('ResolveMatchParticipationForMatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveMatchParticipationForMatchService = TestBed.get(ResolveMatchParticipationForMatchService);
    expect(service).toBeTruthy();
  });
});
