import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRockPaperScissorsRoundEndpointsRoutingModule } from './test-rock-paper-scissors-round-endpoints-routing.module';
import {
  TestRockPaperScissorsRoundEndpointsComponent
} from './test-rock-paper-scissors-round-endpoints/test-rock-paper-scissors-round-endpoints.component';
import {
  TestRockPaperScissorsRoundListEndpointComponent
} from './test-rock-paper-scissors-round-list-endpoint/test-rock-paper-scissors-round-list-endpoint.component';

@NgModule({
  imports: [
    CommonModule,
    TestRockPaperScissorsRoundEndpointsRoutingModule
  ],
  declarations: [TestRockPaperScissorsRoundEndpointsComponent, TestRockPaperScissorsRoundListEndpointComponent]
})
export class TestRockPaperScissorsRoundEndpointsModule { }
