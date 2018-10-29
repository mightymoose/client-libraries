import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendMatchParticipationListResponse } from 'projects/mmoaig-core/src/public_api';
import { pluck } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-match-participation-list-endpoint',
  templateUrl: './test-match-participation-list-endpoint.component.html',
  styleUrls: ['./test-match-participation-list-endpoint.component.css']
})
export class TestMatchParticipationListEndpointComponent implements OnInit {
  public participation: Observable<BackendMatchParticipationListResponse>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.participation = this.route.data.pipe(pluck('matchParticipation', 'data'));
  }
}
