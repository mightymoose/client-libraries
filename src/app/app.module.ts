import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MmoaigCoreModule } from 'mmoaig-core';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MmoaigCoreModule.forRoot({apiBase: environment.apiBase})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
