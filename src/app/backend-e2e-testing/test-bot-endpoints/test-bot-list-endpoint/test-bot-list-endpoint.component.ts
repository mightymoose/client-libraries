import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendBotListResponse } from 'projects/mmoaig-core/src/public_api';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-test-bot-list-endpoint',
  templateUrl: './test-bot-list-endpoint.component.html',
  styleUrls: ['./test-bot-list-endpoint.component.css']
})
export class TestBotListEndpointComponent implements OnInit {
  public bots: Observable<BackendBotListResponse>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.bots = this.route.data.pipe(pluck('bots', 'data'));
  }

}
