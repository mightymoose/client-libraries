import { TestBed } from '@angular/core/testing';

import { BotService } from './bot.service';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

describe('BotService', () => {
  let mockApiService: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    mockApiService = jasmine.createSpyObj('ApiService', ['get']);
  });

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: ApiService, useValue: mockApiService}
    ]
  }));

  it('should be created', () => {
    const service: BotService = TestBed.get(BotService);
    expect(service).toBeTruthy();
  });

  describe('.source', () => {
    let botId: number;
    let expectedResult: Observable<string>;
    let result: Observable<string>;

    beforeEach(() => {
      const service: BotService = TestBed.get(BotService);
      botId = Math.random();
      expectedResult = of(`${Math.random()}`);
      mockApiService.get.and.returnValue(expectedResult);
      result = service.source(botId);
    });

    it('calls ApiService.get exactly once', () => {
      expect(mockApiService.get).toHaveBeenCalledTimes(1);
    });

    it('passes the formatted URL id to ApiService.get and asks for a text response', () => {
      expect(mockApiService.get).toHaveBeenCalledWith(`v1/bots/${botId}/source`, {responseType: 'text'});
    });

    it('returns the result of the ApiService.get call', () => {
      expect(result).toBe(expectedResult);
    });
  });
});
