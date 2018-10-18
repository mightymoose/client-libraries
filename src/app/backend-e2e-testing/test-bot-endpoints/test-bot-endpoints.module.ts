import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestBotEndpointsRoutingModule } from './test-bot-endpoints-routing.module';
import { TestBotEndpointsComponent } from './test-bot-endpoints/test-bot-endpoints.component';
import { TestBotListEndpointComponent } from './test-bot-list-endpoint/test-bot-list-endpoint.component';
import { TestBotSourceEndpointComponent } from './test-bot-source-endpoint/test-bot-source-endpoint.component';

@NgModule({
  imports: [
    CommonModule,
    TestBotEndpointsRoutingModule
  ],
  declarations: [TestBotEndpointsComponent, TestBotListEndpointComponent, TestBotSourceEndpointComponent]
})
export class TestBotEndpointsModule { }
