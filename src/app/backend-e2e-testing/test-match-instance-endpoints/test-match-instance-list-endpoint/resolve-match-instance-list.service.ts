import { Injectable } from '@angular/core';
import { BackendService, BackendGithubUserListResponse, MatchInstanceEndpoint, BackendMatchInstanceListResponse } from 'mmoaig-core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveMatchInstanceListService {
  constructor(private backend: BackendService) { }

  resolve(): Observable<BackendMatchInstanceListResponse> {
    return this.backend.list(MatchInstanceEndpoint);
  }
}
