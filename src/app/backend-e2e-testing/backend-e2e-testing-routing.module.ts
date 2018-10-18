import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendE2eTestingComponent } from './backend-e2e-testing/backend-e2e-testing.component';

const routes: Routes = [{
  path: '',
  component: BackendE2eTestingComponent,
  children: [{
    path: 'test-user-endpoints',
    loadChildren: './test-user-endpoints/test-user-endpoints.module#TestUserEndpointsModule'
  }, {
    path: 'test-github-repository-endpoints',
    loadChildren: './test-github-repository-endpoints/test-github-repository-endpoints.module#TestGithubRepositoryEndpointsModule'
  }, {
    path: 'test-github-user-endpoints',
    loadChildren: './test-github-user-endpoints/test-github-user-endpoints.module#TestGithubUserEndpointsModule'
  }, {
    path: 'test-bot-endpoints',
    loadChildren: './test-bot-endpoints/test-bot-endpoints.module#TestBotEndpointsModule'
  }, {
    path: 'test-match-endpoints',
    loadChildren: './test-match-endpoints/test-match-endpoints.module#TestMatchEndpointsModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendE2eTestingRoutingModule { }
