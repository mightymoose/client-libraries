import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestGithubRepositoryEndpointsRoutingModule } from './test-github-repository-endpoints-routing.module';
import { TestGithubRepositoryEndpointsComponent } from './test-github-repository-endpoints/test-github-repository-endpoints.component';
import {
  TestGithubRepositoryListEndpointComponent
} from './test-github-repository-list-endpoint/test-github-repository-list-endpoint.component';

@NgModule({
  imports: [
    CommonModule,
    TestGithubRepositoryEndpointsRoutingModule
  ],
  declarations: [TestGithubRepositoryEndpointsComponent, TestGithubRepositoryListEndpointComponent]
})
export class TestGithubRepositoryEndpointsModule { }
