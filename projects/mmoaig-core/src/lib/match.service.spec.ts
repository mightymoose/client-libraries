import { TestBed } from '@angular/core/testing';
import { MatchService } from './match.service';
import { ApiService } from './api.service';
import { of, Observable } from 'rxjs';
import { BackendMatchResponse } from './backend';

describe('MatchService', () => {
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
    const service: MatchService = TestBed.get(MatchService);
    expect(service).toBeTruthy();
  });

  describe('.source', () => {
    let expectedResult: Observable<BackendMatchResponse>;
    let result: Observable<BackendMatchResponse>;

    beforeEach(() => {
      const service: MatchService = TestBed.get(MatchService);
      expectedResult = of({
        data: {
          id: Math.random(),
          type: 'matches',
          attributes: {
            status: 'MatchPending',
            type: 'RockPaperScissors'
          }
        }
      } as BackendMatchResponse);
      mockApiService.get.and.returnValue(expectedResult);
      result = service.next();
    });

    it('calls ApiService.get exactly once', () => {
      expect(mockApiService.get).toHaveBeenCalledTimes(1);
    });

    it('passes the next match URL', () => {
      expect(mockApiService.get).toHaveBeenCalledWith('v1/matches/next');
    });

    it('returns the result of the ApiService.get call', () => {
      expect(result).toBe(expectedResult);
    });
  });
});
