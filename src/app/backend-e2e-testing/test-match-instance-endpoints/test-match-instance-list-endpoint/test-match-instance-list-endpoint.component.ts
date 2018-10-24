import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { BackendMatchInstanceListResponse } from 'projects/mmoaig-core/src/public_api';

@Component({
  selector: 'app-test-match-instance-list-endpoint',
  templateUrl: './test-match-instance-list-endpoint.component.html',
  styleUrls: ['./test-match-instance-list-endpoint.component.css']
})
export class TestMatchInstanceListEndpointComponent implements OnInit {
  public matchInstances: Observable<BackendMatchInstanceListResponse>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.matchInstances = this.route.data.pipe(pluck('matchInstances', 'data'));
  }
}
