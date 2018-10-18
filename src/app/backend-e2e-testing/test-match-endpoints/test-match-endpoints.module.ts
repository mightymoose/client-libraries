import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestMatchEndpointsRoutingModule } from './test-match-endpoints-routing.module';
import { TestMatchEndpointsComponent } from './test-match-endpoints/test-match-endpoints.component';
import { TestMatchListEndpointComponent } from './test-match-list-endpoint/test-match-list-endpoint.component';
import { TestUpdateMatchEndpointComponent } from './test-update-match-endpoint/test-update-match-endpoint.component';
import { TestMatchDetailsEndpointComponent } from './test-match-details-endpoint/test-match-details-endpoint.component';
import { TestNextMatchEndpointComponent } from './test-next-match-endpoint/test-next-match-endpoint.component';

@NgModule({
  imports: [
    CommonModule,
    TestMatchEndpointsRoutingModule
  ],
  declarations: [
    TestMatchEndpointsComponent,
    TestMatchListEndpointComponent,
    TestUpdateMatchEndpointComponent,
    TestMatchDetailsEndpointComponent,
    TestNextMatchEndpointComponent
  ]
})
export class TestMatchEndpointsModule { }
