import { Injectable } from '@angular/core';
import { MatchParticipationService, BackendMatchParticipationListResponse } from 'mmoaig-core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveMatchParticipationForMatchService {
  constructor(private matchParticipation: MatchParticipationService) { }

  resolve(): Observable<BackendMatchParticipationListResponse> {
    return this.matchParticipation.forMatch(1);
  }
}
