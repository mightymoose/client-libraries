import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendRockPaperScissorsRoundListResponse, RockPaperScissorsRoundEndpoint, BackendService } from 'mmoaig-core';

@Injectable({
  providedIn: 'root'
})
export class ResolveRockPaperScissorsRoundListService {
  constructor(private backend: BackendService) { }

  resolve(): Observable<BackendRockPaperScissorsRoundListResponse> {
    return this.backend.list(RockPaperScissorsRoundEndpoint);
  }
}
