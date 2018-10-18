import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveGithubUserListService } from './test-github-user-list-endpoint/resolve-github-user-list.service';
import { TestGithubUserListEndpointComponent } from './test-github-user-list-endpoint/test-github-user-list-endpoint.component';
import { TestGithubUserEndpointsComponent } from './test-github-user-endpoints/test-github-user-endpoints.component';

const routes: Routes = [{
  path: '',
  component: TestGithubUserEndpointsComponent,
  children: [{
    path: 'test-github-user-list-endpoint',
    component: TestGithubUserListEndpointComponent,
    resolve: {
      githubUsers: ResolveGithubUserListService
    }
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestGithubUserEndpointsRoutingModule { }
