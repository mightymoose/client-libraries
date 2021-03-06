import { Injectable } from '@angular/core';
import { BackendGithubUserListResponse, BackendService } from 'mmoaig-core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { GithubUserEndpoint } from 'mmoaig-core';

@Injectable({
  providedIn: 'root'
})
export class ResolveGithubUserListService implements Resolve<BackendGithubUserListResponse> {
  constructor(private backend: BackendService) { }

  resolve(): Observable<BackendGithubUserListResponse> {
    return this.backend.list(GithubUserEndpoint);
  }

}
