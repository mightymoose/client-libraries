import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  TestGithubRepositoryListEndpointComponent
} from './test-github-repository-list-endpoint/test-github-repository-list-endpoint.component';
import { TestGithubRepositoryEndpointsComponent } from './test-github-repository-endpoints/test-github-repository-endpoints.component';
import { ResolveGithubRepositoryListService } from './test-github-repository-list-endpoint/resolve-github-repository-list.service';

const routes: Routes = [{
  path: '',
  component: TestGithubRepositoryEndpointsComponent,
  children: [{
    path: 'test-github-repository-list-endpoint',
    component: TestGithubRepositoryListEndpointComponent,
    resolve: {
      githubRepositories: ResolveGithubRepositoryListService
    }
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestGithubRepositoryEndpointsRoutingModule { }
