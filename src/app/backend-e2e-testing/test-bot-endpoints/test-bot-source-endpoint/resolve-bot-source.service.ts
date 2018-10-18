import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BotService } from 'mmoaig-core';

@Injectable({
  providedIn: 'root'
})
export class ResolveBotSourceService implements Resolve<string> {
  constructor(private bot: BotService) { }

  resolve(): Observable<string> {
    return this.bot.source(1);
  }
}
