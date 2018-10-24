import { Injectable } from '@angular/core';
import { BackendMatchResponse, BackendService } from 'mmoaig-core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchEndpoint } from 'mmoaig-core';

@Injectable({
  providedIn: 'root'
})
export class ResolveMatchDetailsService implements Resolve<BackendMatchResponse> {

  constructor(private backend: BackendService) { }

  resolve(): Observable<BackendMatchResponse> {
    return this.backend.get(MatchEndpoint, 1);
  }
}
