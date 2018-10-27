import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestMatchInstanceListEndpointComponent } from './test-match-instance-list-endpoint/test-match-instance-list-endpoint.component';
import { TestMatchInstanceEndpointsRoutingModule } from './test-match-instance-endpoints-routing.module';
import { TestMatchInstanceEndpointsComponent } from './test-match-instance-endpoints/test-match-instance-endpoints.component';
import {
  TestMatchInstancesForMatchEndpointComponent
} from './test-match-instances-for-match-endpoint/test-match-instances-for-match-endpoint.component';

@NgModule({
  imports: [
    CommonModule,
    TestMatchInstanceEndpointsRoutingModule
  ],
  declarations: [TestMatchInstanceListEndpointComponent, TestMatchInstanceEndpointsComponent, TestMatchInstancesForMatchEndpointComponent]
})
export class TestMatchInstanceEndpointsModule { }
