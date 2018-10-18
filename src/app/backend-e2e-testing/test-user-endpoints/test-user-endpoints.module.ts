import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestUserEndpointsRoutingModule } from './test-user-endpoints-routing.module';
import { TestUserListEndpointComponent } from './test-user-list-endpoint/test-user-list-endpoint.component';
import { TestUserEndpointsComponent } from './test-user-endpoints/test-user-endpoints.component';

@NgModule({
  imports: [
    CommonModule,
    TestUserEndpointsRoutingModule
  ],
  declarations: [TestUserListEndpointComponent, TestUserEndpointsComponent]
})
export class TestUserEndpointsModule { }
