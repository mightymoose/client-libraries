import { Injectable } from '@angular/core';
import { BackendService, BackendMatchListResponse, MatchEndpoint } from 'mmoaig-core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolveMatchListService implements Resolve<BackendMatchListResponse> {
  constructor(private backend: BackendService) { }

  resolve(): Observable<BackendMatchListResponse> {
    return this.backend.list(MatchEndpoint);
  }
}
