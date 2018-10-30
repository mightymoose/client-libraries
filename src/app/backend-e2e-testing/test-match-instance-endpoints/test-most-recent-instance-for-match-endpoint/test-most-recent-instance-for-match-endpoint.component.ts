import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BackendMatchInstance } from 'mmoaig-core';

@Component({
  selector: 'app-test-most-recent-instance-for-match-endpoint',
  templateUrl: './test-most-recent-instance-for-match-endpoint.component.html',
  styleUrls: ['./test-most-recent-instance-for-match-endpoint.component.css']
})
export class TestMostRecentInstanceForMatchEndpointComponent implements OnInit {
  public matchInstance: BackendMatchInstance;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .pipe(pluck('matchInstance', 'data'))
      .subscribe((matchInstance: BackendMatchInstance) => this.matchInstance = matchInstance);
  }

}
