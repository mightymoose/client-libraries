import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendMatchInstanceListResponse } from 'mmoaig-core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-test-match-instances-for-match-endpoint',
  templateUrl: './test-match-instances-for-match-endpoint.component.html',
  styleUrls: ['./test-match-instances-for-match-endpoint.component.css']
})
export class TestMatchInstancesForMatchEndpointComponent implements OnInit {

  public matchInstances: Observable<BackendMatchInstanceListResponse>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.matchInstances = this.route.data.pipe(pluck('matchInstances', 'data'));
  }
}
