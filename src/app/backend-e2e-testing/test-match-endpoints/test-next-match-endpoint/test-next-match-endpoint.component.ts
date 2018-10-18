import { Component, OnInit } from '@angular/core';
import { BackendMatchResponse } from 'mmoaig-core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-test-next-match-endpoint',
  templateUrl: './test-next-match-endpoint.component.html',
  styleUrls: ['./test-next-match-endpoint.component.css']
})
export class TestNextMatchEndpointComponent implements OnInit {
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
