import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { ServiceService } from './service.service';
import { NewComp2Component } from './new-comp2/new-comp2.component';
import { HttpClientModule } from '@angular/common/http';
import { SerService } from './ser.service';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    NewComp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceService,SerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
