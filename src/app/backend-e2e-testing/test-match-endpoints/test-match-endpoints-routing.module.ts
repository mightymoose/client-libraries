import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestMatchEndpointsComponent } from './test-match-endpoints/test-match-endpoints.component';
import { TestMatchListEndpointComponent } from './test-match-list-endpoint/test-match-list-endpoint.component';
import { ResolveMatchListService } from './test-match-list-endpoint/resolve-match-list.service';
import { TestUpdateMatchEndpointComponent } from './test-update-match-endpoint/test-update-match-endpoint.component';
import { TestMatchDetailsEndpointComponent } from './test-match-details-endpoint/test-match-details-endpoint.component';
import { TestNextMatchEndpointComponent } from './test-next-match-endpoint/test-next-match-endpoint.component';
import { ResolveMatchDetailsService } from './test-match-details-endpoint/resolve-match-details.service';
import { ResolveUpdatedMatchService } from './test-update-match-endpoint/resolve-updated-match.service';
import { ResolveNextMatchService } from './test-next-match-endpoint/resolve-next-match.service';

const routes: Routes = [{
  path: '',
  component: TestMatchEndpointsComponent,
  children: [{
    path: 'test-match-list-endpoint',
    component: TestMatchListEndpointComponent,
    resolve: {
      matches: ResolveMatchListService
    }
  }, {
    path: 'test-next-match-endpoint',
    component: TestNextMatchEndpointComponent,
    resolve: {
      match: ResolveNextMatchService
    }
  }, {
    path: 'test-update-match-endpoint/:newStatus',
    component: TestUpdateMatchEndpointComponent,
    resolve: {
      update: ResolveUpdatedMatchService
    }
  }, {
    path: 'test-match-details-endpoint',
    component: TestMatchDetailsEndpointComponent,
    resolve: {
      match: ResolveMatchDetailsService
    }
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestMatchEndpointsRoutingModule { }
