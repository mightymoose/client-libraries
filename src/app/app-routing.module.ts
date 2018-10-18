import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: 'backend-e2e-testing',
    loadChildren: './backend-e2e-testing/backend-e2e-testing.module#BackendE2eTestingModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
