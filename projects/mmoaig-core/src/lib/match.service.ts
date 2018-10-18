import { Injectable } from '@angular/core';
import { BackendMatchResponse } from './backend';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private api: ApiService) { }

  next(): Observable<BackendMatchResponse> {
    return this.api.get('v1/matches/next');
  }
}
