import { TestBed } from '@angular/core/testing';

import { ResolveBotSourceService } from './resolve-bot-source.service';

describe('ResolveBotSourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveBotSourceService = TestBed.get(ResolveBotSourceService);
    expect(service).toBeTruthy();
  });
});
