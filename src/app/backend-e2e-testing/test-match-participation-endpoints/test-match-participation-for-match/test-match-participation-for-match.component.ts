import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendMatchParticipationListResponse } from 'mmoaig-core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-test-match-participation-for-match',
  templateUrl: './test-match-participation-for-match.component.html',
  styleUrls: ['./test-match-participation-for-match.component.css']
})
export class TestMatchParticipationForMatchComponent implements OnInit {
  public participation: Observable<BackendMatchParticipationListResponse>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.participation = this.route.data.pipe(pluck('matchParticipation', 'data'));
  }
}
