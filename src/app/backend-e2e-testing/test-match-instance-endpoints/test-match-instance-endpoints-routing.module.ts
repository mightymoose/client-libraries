import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestMatchInstanceListEndpointComponent } from './test-match-instance-list-endpoint/test-match-instance-list-endpoint.component';
import { TestMatchInstanceEndpointsComponent } from './test-match-instance-endpoints/test-match-instance-endpoints.component';
import { ResolveMatchInstanceListService } from './test-match-instance-list-endpoint/resolve-match-instance-list.service';
import {
  TestMatchInstancesForMatchEndpointComponent
 } from './test-match-instances-for-match-endpoint/test-match-instances-for-match-endpoint.component';
import { ResolveMatchInstancesForMatchService } from './test-match-instances-for-match-endpoint/resolve-match-instances-for-match.service';
import {
  TestMostRecentInstanceForMatchEndpointComponent
} from './test-most-recent-instance-for-match-endpoint/test-most-recent-instance-for-match-endpoint.component';
import {
  ResolveMostRecentMatchInstanceService
} from './test-most-recent-instance-for-match-endpoint/resolve-most-recent-match-instance.service';

const routes: Routes = [{
  path: '',
  component: TestMatchInstanceEndpointsComponent,
  children: [{
    path: 'test-match-instance-list-endpoint',
    component: TestMatchInstanceListEndpointComponent,
    resolve: {
      matchInstances: ResolveMatchInstanceListService
    }
  }, {
    path: 'test-most-recent-instance-for-match-endpoint',
    component: TestMostRecentInstanceForMatchEndpointComponent,
    resolve: {
      matchInstance: ResolveMostRecentMatchInstanceService
    }
  }, {
    path: 'test-match-instances-for-match-endpoint',
    component: TestMatchInstancesForMatchEndpointComponent,
    resolve: {
      matchInstances: ResolveMatchInstancesForMatchService
    }
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestMatchInstanceEndpointsRoutingModule { }
