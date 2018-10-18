import { Component, OnInit } from '@angular/core';
import { BackendMatchResponse } from 'mmoaig-core/public_api';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-test-match-details-endpoint',
  templateUrl: './test-match-details-endpoint.component.html',
  styleUrls: ['./test-match-details-endpoint.component.css']
})
export class TestMatchDetailsEndpointComponent implements OnInit {
  public match: BackendMatchResponse;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .pipe(pluck('match'))
      .subscribe((match: BackendMatchResponse) => {
        this.match = match;
      });
  }

}
