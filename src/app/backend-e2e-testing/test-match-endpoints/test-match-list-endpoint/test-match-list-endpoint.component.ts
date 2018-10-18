import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendMatchListResponse } from 'projects/mmoaig-core/src/public_api';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-test-match-list-endpoint',
  templateUrl: './test-match-list-endpoint.component.html',
  styleUrls: ['./test-match-list-endpoint.component.css']
})
export class TestMatchListEndpointComponent implements OnInit {
  public matches: Observable<BackendMatchListResponse>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.matches = this.route.data.pipe(pluck('matches', 'data'));
  }

}
