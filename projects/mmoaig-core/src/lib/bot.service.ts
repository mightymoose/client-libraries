import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(public api: ApiService) { }

  source(botId: number): Observable<string> {
    return this.api.get(`v1/bots/${botId}/source`, {responseType: 'text'});
  }
}
