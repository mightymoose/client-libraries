import { Injectable } from '@angular/core';
import { MatchService, BackendMatchResponse } from 'mmoaig-core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveNextMatchService implements Resolve<BackendMatchResponse> {

  constructor(private match: MatchService) { }

  resolve(): Observable<any> {
    return this.match.next();
  }
}
