import { TestBed } from '@angular/core/testing';

import { BackendService } from './backend.service';
import { ApiService } from './api.service';
import { BackendBot, BotEndpoint, BackendBotAttributes, JSONAPIListResponse, BackendBotResponse } from './backend';
import { Observable, of } from 'rxjs';

describe('BackendService', () => {
  let mockApiService: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    mockApiService = jasmine.createSpyObj('ApiService', ['get', 'put', 'post']);
  });

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: ApiService, useValue: mockApiService}
    ]
  }));

  it('should be created', () => {
    const service: BackendService = TestBed.get(BackendService);
    expect(service).toBeTruthy();
  });

  describe('.list', () => {
    let expectedResult: Observable<JSONAPIListResponse<'bots', BackendBotAttributes, never>>;
    let result: Observable<JSONAPIListResponse<'bots', BackendBotAttributes, never>>;

    beforeEach(() => {
      const service: BackendService = TestBed.get(BackendService);
      expectedResult = of({data: []});
      mockApiService.get.and.returnValue(expectedResult);
      result = service.list(BotEndpoint);
    });

    it('calls ApiService.get exactly once', () => {
      expect(mockApiService.get).toHaveBeenCalledTimes(1);
    });

    it('passes the endpoint url to ApiService.get', () => {
      expect(mockApiService.get).toHaveBeenCalledWith(BotEndpoint.url);
    });

    it('returns the result of calling ApiService.get', () => {
      expect(result).toBe(expectedResult);
    });
  });

  describe('.get', () => {
    let expectedResult: Observable<BackendBotResponse>;
    let result: Observable<BackendBotResponse>;

    beforeEach(() => {
      const service: BackendService = TestBed.get(BackendService);
      expectedResult = of({
        data: {
          id: 1,
          type: 'bots',
          attributes: {
            path: `${Math.random()}`
          }
        }
      } as BackendBotResponse);
      mockApiService.get.and.returnValue(expectedResult);
      result = service.get(BotEndpoint, 1);
    });

    it('calls ApiService.get exactly once', () => {
      expect(mockApiService.get).toHaveBeenCalledTimes(1);
    });

    it('passes the formatted endpoint url to ApiService.get', () => {
      expect(mockApiService.get).toHaveBeenCalledWith(`${BotEndpoint.url}/1`);
    });

    it('returns the result of calling ApiService.get', () => {
      expect(result).toBe(expectedResult);
    });
  });

  describe('.update', () => {
    let attributes: BackendBotAttributes;
    let expectedResult: Observable<BackendBotAttributes>;
    let result: Observable<BackendBotAttributes>;

    beforeEach(() => {
      const service: BackendService = TestBed.get(BackendService);
      expectedResult = of({path: `${Math.random()}`});
      mockApiService.put.and.returnValue(expectedResult);
      attributes = {path: `${Math.random()}`};
      result = service.update(BotEndpoint, 1, attributes);
    });

    it('calls ApiService.put exactly once', () => {
      expect(mockApiService.put).toHaveBeenCalledTimes(1);
    });

    it('passes the formatted endpoint url and model attributes to ApiService.put', () => {
      expect(mockApiService.put).toHaveBeenCalledWith(`${BotEndpoint.url}/1`, attributes);
    });

    it('returns the result of calling ApiService.get', () => {
      expect(result).toBe(expectedResult);
    });
  });

  describe('.create', () => {
    let attributes: BackendBotAttributes;
    let expectedResult: Observable<BackendBotResponse>;
    let result: Observable<BackendBotResponse>;

    beforeEach(() => {
      const service: BackendService = TestBed.get(BackendService);
      expectedResult = of({
        data: {
          id: 1,
          type: 'bots',
          attributes: {
            path: `${Math.random()}`
          }
        }
      } as BackendBotResponse);
      mockApiService.post.and.returnValue(expectedResult);
      attributes = {path: `${Math.random()}`};
      result = service.create(BotEndpoint, attributes);
    });

    it('calls ApiService.put exactly once', () => {
      expect(mockApiService.post).toHaveBeenCalledTimes(1);
    });

    it('passes the endpoint url and model attributes to ApiService.put', () => {
      expect(mockApiService.post).toHaveBeenCalledWith(BotEndpoint.url, attributes);
    });

    it('returns the result of calling ApiService.get', () => {
      expect(result).toBe(expectedResult);
    });
  });
});
