import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { API_BASE } from './injection-tokens';
import { Observable, of } from 'rxjs';

describe('ApiService', () => {
  let mockHttpClient: jasmine.SpyObj<HttpClient>;
  let mockApiBase: string;
  let defaultOptions: Object;

  beforeEach(() => {
    defaultOptions = {};
    mockHttpClient = jasmine.createSpyObj('HttpClient', ['get', 'put', 'post']);
    mockApiBase = `${Math.random()}`;
  });

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: HttpClient, useValue: mockHttpClient},
      {provide: API_BASE, useValue: mockApiBase}
    ]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  describe('.get', () => {
    let url: string;
    let expectedResult: Observable<number>;

    beforeEach(() => {
      url = `${Math.random()}`;
      expectedResult = of(Math.random());
      mockHttpClient.get.and.returnValue(expectedResult);
    });

    describe('when no options are passed to HttpClient.get', () => {
      let result: Observable<number>;

      beforeEach(() => {
        const service: ApiService = TestBed.get(ApiService);
        mockHttpClient.get.and.returnValue(expectedResult);
        result = service.get(url);
      });

      it('calls HttpClient.get exactly once', () => {
        expect(mockHttpClient.get).toHaveBeenCalledTimes(1);
      });

      it('passes the formatted url and default options to HttpClient.get', () => {
        expect(mockHttpClient.get).toHaveBeenCalledWith(`${mockApiBase}${url}`, defaultOptions);
      });

      it('returns the result of calling HttpClient.get', () => {
        expect(result).toBe(expectedResult);
      });
    });

    describe('when options are passed to ApiService.get', () => {
      let options: Object;
      let result: Observable<number>;

      beforeEach(() => {
        const service: ApiService = TestBed.get(ApiService);
        options = {something: Math.random()};
        result = service.get(url, options);
      });


      it('calls HttpClient.get exactly once', () => {
        expect(mockHttpClient.get).toHaveBeenCalledTimes(1);
      });

      it('passes the formatted url and default options to HttpClient.get', () => {
        expect(mockHttpClient.get).toHaveBeenCalledWith(`${mockApiBase}${url}`, options);
      });

      it('returns the result of calling HttpClient.get', () => {
        expect(result).toBe(expectedResult);
      });
    });
  });

  describe('.put', () => {
    let url: string;
    let body: number;
    let expectedResult: Observable<number>;

    beforeEach(() => {
      url = `${Math.random()}`;
      body = Math.random();
      expectedResult = of(Math.random());

      mockHttpClient.put.and.returnValue(expectedResult);
    });

    describe('when no options are passed to ApiService.put', () => {
      let result: Observable<number>;

      beforeEach(() => {
        const service: ApiService = TestBed.get(ApiService);
        result = service.put(url, body);
      });

      it('calls HttpClient.put exactly once', () => {
        expect(mockHttpClient.put).toHaveBeenCalledTimes(1);
      });

      it('passes the formatted url, body, and default options to HttpClient.put', () => {
        expect(mockHttpClient.put).toHaveBeenCalledWith(`${mockApiBase}${url}`, body, defaultOptions);
      });

      it('returns the result of calling HttpClient.put', () => {
        expect(result).toBe(expectedResult);
      });
    });

    describe('when options are passed to ApiService.put', () => {
      let result: Observable<number>;
      let options: Object;

      beforeEach(() => {
        const service: ApiService = TestBed.get(ApiService);
        options = {something: Math.random()};
        result = service.put(url, body, options);
      });

      it('calls HttpClient.put exactly once', () => {
        expect(mockHttpClient.put).toHaveBeenCalledTimes(1);
      });

      it('passes the formatted url, body, and options to HttpClient.put', () => {
        expect(mockHttpClient.put).toHaveBeenCalledWith(`${mockApiBase}${url}`, body, options);
      });

      it('returns the result of calling HttpClient.put', () => {
        expect(result).toBe(expectedResult);
      });
    });
  });

  describe('.post', () => {
    let url: string;
    let body: number;
    let expectedResult: Observable<number>;

    beforeEach(() => {
      url = `${Math.random()}`;
      body = Math.random();
      expectedResult = of(Math.random());

      mockHttpClient.post.and.returnValue(expectedResult);
    });

    describe('when no options are passed to ApiService.post', () => {
      let result: Observable<number>;

      beforeEach(() => {
        const service: ApiService = TestBed.get(ApiService);
        result = service.post(url, body);
      });

      it('calls HttpClient.post exactly once', () => {
        expect(mockHttpClient.post).toHaveBeenCalledTimes(1);
      });

      it('passes the formatted url, body, and default options to HttpClient.post', () => {
        expect(mockHttpClient.post).toHaveBeenCalledWith(`${mockApiBase}${url}`, body, defaultOptions);
      });

      it('returns the result of calling HttpClient.post', () => {
        expect(result).toBe(expectedResult);
      });
    });

    describe('when options are passed to ApiService.post', () => {
      let result: Observable<number>;
      let options: Object;

      beforeEach(() => {
        const service: ApiService = TestBed.get(ApiService);
        options = {something: Math.random()};
        result = service.post(url, body, options);
      });

      it('calls HttpClient.post exactly once', () => {
        expect(mockHttpClient.post).toHaveBeenCalledTimes(1);
      });

      it('passes the formatted url, body, and options to HttpClient.post', () => {
        expect(mockHttpClient.post).toHaveBeenCalledWith(`${mockApiBase}${url}`, body, options);
      });

      it('returns the result of calling HttpClient.post', () => {
        expect(result).toBe(expectedResult);
      });
    });
  });
});
