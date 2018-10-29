import { Observable, of } from 'rxjs';
import { BackendMatchParticipationListResponse, EndpointUrl, BackendMatchParticipationResponse } from './backend';
import { ApiService } from './api.service';
import { TestBed } from '@angular/core/testing';
import { MatchParticipationService } from './match-participation.service';
import { HttpParams } from '@angular/common/http';

describe('MatchParticipationService', () => {
    let mockApiService: jasmine.SpyObj<ApiService>;

    beforeEach(() => {
        mockApiService = jasmine.createSpyObj('ApiService', ['get']);
    });

    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            { provide: ApiService, useValue: mockApiService }
        ]
    }));

    describe('.forMatch', () => {
        let matchId: number;
        let expectedResult: Observable<BackendMatchParticipationListResponse>;
        let result: Observable<BackendMatchParticipationListResponse>;

        beforeEach(() => {
            matchId = Math.random();
            expectedResult = of({
                data: []
            });
            const service: MatchParticipationService = TestBed.get(MatchParticipationService);
            mockApiService.get.and.returnValue(expectedResult);
            result = service.forMatch(matchId);
        });

        it('calls ApiService.get exactly once', () => {
            expect(mockApiService.get).toHaveBeenCalledTimes(1);
        });

        it('passes the url for the filtered match instances', () => {
            expect(mockApiService.get.calls.argsFor(0)[0]).toBe(EndpointUrl.MatchParticipationUrl);
        });

        it('adds exactly one query param to the request', () => {
            const params: HttpParams = mockApiService.get.calls.argsFor(0)[1].params;
            expect(params.keys().length).toBe(1);
        });

        it('adds the query param for filtering by matchId to the request', () => {
            const params: HttpParams = mockApiService.get.calls.argsFor(0)[1].params;
            expect(params.get('filter[matchId]')).toBe(String(matchId));
        });

        it('returns the result of the ApiService.get call', () => {
            expect(result).toBe(expectedResult);
        });
    });
});
