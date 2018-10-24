import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestUserListEndpointComponent } from './test-user-list-endpoint/test-user-list-endpoint.component';
import { TestUserEndpointsComponent } from './test-user-endpoints/test-user-endpoints.component';
import { ResolveUserListService } from './test-user-list-endpoint/resolve-user-list.service';

const routes: Routes = [{
  path: '',
  component: TestUserEndpointsComponent,
  children: [{
    path: 'test-user-list-endpoint',
    component: TestUserListEndpointComponent,
    resolve: {
      users: ResolveUserListService
    }
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestUserEndpointsRoutingModule { }
