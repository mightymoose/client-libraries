import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestMatchParticipationEndpointsRoutingModule } from './test-match-participation-endpoints-routing.module';
import {
  TestMatchParticipationEndpointsComponent
} from './test-match-participation-endpoints/test-match-participation-endpoints.component';
import {
  TestMatchParticipationListEndpointComponent
} from './test-match-participation-list-endpoint/test-match-participation-list-endpoint.component';
import { TestMatchParticipationForMatchComponent } from './test-match-participation-for-match/test-match-participation-for-match.component';

@NgModule({
  imports: [
    CommonModule,
    TestMatchParticipationEndpointsRoutingModule
  ],
  declarations: [
    TestMatchParticipationEndpointsComponent,
    TestMatchParticipationListEndpointComponent,
    TestMatchParticipationForMatchComponent
  ]
})
export class TestMatchParticipationEndpointsModule { }
