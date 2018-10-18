import { Injectable } from '@angular/core';
import { BackendGithubRepositoryListResponse } from 'projects/mmoaig-core/src/public_api';
import { BackendService, GithubRepositoryEndpoint } from 'mmoaig-core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolveGithubRepositoryListService implements Resolve<BackendGithubRepositoryListResponse> {
  constructor(private backend: BackendService) { }

  resolve(): Observable<BackendGithubRepositoryListResponse> {
    return this.backend.list(GithubRepositoryEndpoint);
  }
}
