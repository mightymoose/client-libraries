import { TestBed } from '@angular/core/testing';

import { ResolveBotListService } from './resolve-bot-list.service';

describe('ResolveBotListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveBotListService = TestBed.get(ResolveBotListService);
    expect(service).toBeTruthy();
  });
});
