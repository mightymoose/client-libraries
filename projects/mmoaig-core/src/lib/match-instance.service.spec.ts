import { Observable, of } from 'rxjs';
import { BackendMatchInstanceListResponse, EndpointUrl } from './backend';
import { ApiService } from './api.service';
import { TestBed } from '@angular/core/testing';
import { MatchInstanceService } from './match-instance.service';
import { HttpParams } from '@angular/common/http';

describe('MatchService', () => {
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
        let expectedResult: Observable<BackendMatchInstanceListResponse>;
        let result: Observable<BackendMatchInstanceListResponse>;

        beforeEach(() => {
            matchId = Math.random();
            expectedResult = of({
                data: []
            });
            const service: MatchInstanceService = TestBed.get(MatchInstanceService);
            mockApiService.get.and.returnValue(expectedResult);
            result = service.forMatch(matchId);
        });

        it('calls ApiService.get exactly once', () => {
            expect(mockApiService.get).toHaveBeenCalledTimes(1);
        });

        it('passes the url for the filtered match instances', () => {
            expect(mockApiService.get.calls.argsFor(0)[0]).toBe(EndpointUrl.MatchInstanceEndpointUrl);
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
