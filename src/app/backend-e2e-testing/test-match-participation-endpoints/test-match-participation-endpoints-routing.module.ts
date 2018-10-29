import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  TestMatchParticipationEndpointsComponent
} from './test-match-participation-endpoints/test-match-participation-endpoints.component';
import {
  TestMatchParticipationListEndpointComponent
} from './test-match-participation-list-endpoint/test-match-participation-list-endpoint.component';
import { ResolveMatchParticipationListService } from './test-match-participation-list-endpoint/resolve-match-participation-list.service';
import { TestMatchParticipationForMatchComponent } from './test-match-participation-for-match/test-match-participation-for-match.component';
import {
  ResolveMatchParticipationForMatchService
} from './test-match-participation-for-match/resolve-match-participation-for-match.service';

const routes: Routes = [{
  path: '',
  component: TestMatchParticipationEndpointsComponent,
  children: [{
    path: 'test-match-participation-list-endpoint',
    component: TestMatchParticipationListEndpointComponent,
    resolve: {
      matchParticipation: ResolveMatchParticipationListService
    }
  }, {
    path: 'test-match-participation-for-match-endpoint',
    component: TestMatchParticipationForMatchComponent,
    resolve: {
      matchParticipation: ResolveMatchParticipationForMatchService
    }
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestMatchParticipationEndpointsRoutingModule { }
