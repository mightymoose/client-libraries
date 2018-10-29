import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

import { ApiService } from './api.service';
import { BackendMatchParticipationListResponse, EndpointUrl } from './backend';

@Injectable({
    providedIn: 'root'
})
export class MatchParticipationService {
    constructor(private apiService: ApiService) {}

    forMatch(matchId: number): Observable<BackendMatchParticipationListResponse> {
        const params: HttpParams = new HttpParams().set('filter[matchId]', String(matchId));
        return this.apiService.get(EndpointUrl.MatchParticipationUrl, {params});
    }
}
