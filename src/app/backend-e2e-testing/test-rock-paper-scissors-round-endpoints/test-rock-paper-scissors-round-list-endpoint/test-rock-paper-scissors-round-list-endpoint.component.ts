import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendRockPaperScissorsRoundListResponse } from 'projects/mmoaig-core/src/public_api';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-test-rock-paper-scissors-round-list-endpoint',
  templateUrl: './test-rock-paper-scissors-round-list-endpoint.component.html',
  styleUrls: ['./test-rock-paper-scissors-round-list-endpoint.component.css']
})
export class TestRockPaperScissorsRoundListEndpointComponent implements OnInit {
  public rockPaperScissorsRounds: Observable<BackendRockPaperScissorsRoundListResponse>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.rockPaperScissorsRounds = this.route.data.pipe(pluck('rockPaperScissorsRounds', 'data'));
  }
}
