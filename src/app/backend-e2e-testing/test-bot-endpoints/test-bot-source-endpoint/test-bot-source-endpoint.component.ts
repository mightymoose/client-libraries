import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-test-bot-source-endpoint',
  templateUrl: './test-bot-source-endpoint.component.html',
  styleUrls: ['./test-bot-source-endpoint.component.css']
})
export class TestBotSourceEndpointComponent implements OnInit {
  public source: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.source = this.route.data.pipe(pluck('botSource'));
  }

}
