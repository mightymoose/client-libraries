import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendE2eTestingRoutingModule } from './backend-e2e-testing-routing.module';
import { BackendE2eTestingComponent } from './backend-e2e-testing/backend-e2e-testing.component';

@NgModule({
  imports: [
    CommonModule,
    BackendE2eTestingRoutingModule
  ],
  declarations: [BackendE2eTestingComponent]
})
export class BackendE2eTestingModule { }
