import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendGithubUserListResponse } from 'mmoaig-core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-test-github-user-list-endpoint',
  templateUrl: './test-github-user-list-endpoint.component.html',
  styleUrls: ['./test-github-user-list-endpoint.component.css']
})
export class TestGithubUserListEndpointComponent implements OnInit {
  public githubUsers: Observable<BackendGithubUserListResponse>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.githubUsers = this.route.data.pipe(pluck('githubUsers', 'data'));
  }
}
