import { TestBed } from '@angular/core/testing';

import { ResolveRockPaperScissorsRoundListService } from './resolve-rock-paper-scissors-round-list.service';

describe('ResolveRockPaperScissorsRoundListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveRockPaperScissorsRoundListService = TestBed.get(ResolveRockPaperScissorsRoundListService);
    expect(service).toBeTruthy();
  });
});
