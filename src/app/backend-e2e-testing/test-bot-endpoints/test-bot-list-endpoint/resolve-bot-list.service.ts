import { Injectable } from '@angular/core';
import { BackendBotListResponse, BackendService, BotEndpoint } from 'mmoaig-core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveBotListService implements Resolve<BackendBotListResponse> {
  constructor(private backend: BackendService) { }

  resolve(): Observable<BackendBotListResponse> {
    return this.backend.list(BotEndpoint);
  }
}
