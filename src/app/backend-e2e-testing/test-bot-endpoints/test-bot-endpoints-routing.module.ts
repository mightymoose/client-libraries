import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestBotEndpointsComponent } from './test-bot-endpoints/test-bot-endpoints.component';
import { TestBotListEndpointComponent } from './test-bot-list-endpoint/test-bot-list-endpoint.component';
import { ResolveBotListService } from './test-bot-list-endpoint/resolve-bot-list.service';
import { TestBotSourceEndpointComponent } from './test-bot-source-endpoint/test-bot-source-endpoint.component';
import { ResolveBotSourceService } from './test-bot-source-endpoint/resolve-bot-source.service';

const routes: Routes = [{
  path: '',
  component: TestBotEndpointsComponent,
  children: [{
    path: 'test-bot-source-endpoint',
    component: TestBotSourceEndpointComponent,
    resolve: {
      botSource: ResolveBotSourceService
    }
  }, {
    path: 'test-bot-list-endpoint',
    component: TestBotListEndpointComponent,
    resolve: {
      bots: ResolveBotListService
    }
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestBotEndpointsRoutingModule { }
