import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

import { ApiService } from './api.service';
import { BackendMatchInstanceListResponse, EndpointUrl, BackendMatchInstanceResponse } from './backend';

@Injectable({
    providedIn: 'root'
})
export class MatchInstanceService {
    constructor(private apiService: ApiService) {}

    forMatch(matchId: number): Observable<BackendMatchInstanceListResponse> {
        const params: HttpParams = new HttpParams().set('filter[matchId]', String(matchId));
        return this.apiService.get(EndpointUrl.MatchInstanceEndpointUrl, {params});
    }

    mostRecentForMatch(matchId: number): Observable<BackendMatchInstanceResponse> {
        return this.apiService.get(`${EndpointUrl.MatchEndpointUrl}/${matchId}/currentInstance`);
    }
}
