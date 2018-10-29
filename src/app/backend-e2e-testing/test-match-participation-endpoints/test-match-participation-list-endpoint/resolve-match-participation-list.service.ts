import { Injectable } from '@angular/core';
import { BackendService, MatchParticipationEndpoint, BackendMatchParticipationListResponse } from 'mmoaig-core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveMatchParticipationListService {
  constructor(private backend: BackendService) { }

  resolve(): Observable<BackendMatchParticipationListResponse> {
    return this.backend.list(MatchParticipationEndpoint);
  }
}
