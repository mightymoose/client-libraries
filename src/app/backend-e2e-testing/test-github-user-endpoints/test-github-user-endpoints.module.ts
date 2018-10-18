import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestGithubUserEndpointsRoutingModule } from './test-github-user-endpoints-routing.module';
import { TestGithubUserEndpointsComponent } from './test-github-user-endpoints/test-github-user-endpoints.component';
import { TestGithubUserListEndpointComponent } from './test-github-user-list-endpoint/test-github-user-list-endpoint.component';

@NgModule({
  imports: [
    CommonModule,
    TestGithubUserEndpointsRoutingModule
  ],
  declarations: [TestGithubUserEndpointsComponent, TestGithubUserListEndpointComponent]
})
export class TestGithubUserEndpointsModule { }
