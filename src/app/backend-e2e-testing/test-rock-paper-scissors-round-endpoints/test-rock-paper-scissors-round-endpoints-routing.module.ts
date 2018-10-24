import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  TestRockPaperScissorsRoundEndpointsComponent
} from './test-rock-paper-scissors-round-endpoints/test-rock-paper-scissors-round-endpoints.component';
import {
  TestRockPaperScissorsRoundListEndpointComponent
 } from './test-rock-paper-scissors-round-list-endpoint/test-rock-paper-scissors-round-list-endpoint.component';
import {
  ResolveRockPaperScissorsRoundListService
} from './test-rock-paper-scissors-round-list-endpoint/resolve-rock-paper-scissors-round-list.service';

const routes: Routes = [{
  path: '',
  component: TestRockPaperScissorsRoundEndpointsComponent,
  children: [{
    path: 'test-rock-paper-scissors-round-list-endpoint',
    component: TestRockPaperScissorsRoundListEndpointComponent,
    resolve: {
      rockPaperScissorsRounds: ResolveRockPaperScissorsRoundListService
    }
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRockPaperScissorsRoundEndpointsRoutingModule { }
