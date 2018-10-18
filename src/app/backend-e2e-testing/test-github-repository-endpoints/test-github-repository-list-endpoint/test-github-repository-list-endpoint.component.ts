import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendGithubUserListResponse } from 'projects/mmoaig-core/src/public_api';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-test-github-repository-list-endpoint',
  templateUrl: './test-github-repository-list-endpoint.component.html',
  styleUrls: ['./test-github-repository-list-endpoint.component.css']
})
export class TestGithubRepositoryListEndpointComponent implements OnInit {
  public githubRepositories: Observable<BackendGithubUserListResponse>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.githubRepositories = this.route.data.pipe(pluck('githubRepositories', 'data'));
  }

}
