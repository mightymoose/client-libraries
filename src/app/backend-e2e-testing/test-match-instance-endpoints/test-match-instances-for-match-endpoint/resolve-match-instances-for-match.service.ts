import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BackendMatchInstanceListResponse, MatchInstanceService } from 'mmoaig-core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveMatchInstancesForMatchService implements Resolve<BackendMatchInstanceListResponse> {

  constructor(private matchInstances: MatchInstanceService) { }

  resolve(): Observable<BackendMatchInstanceListResponse> {
    return this.matchInstances.forMatch(3);
  }
}
