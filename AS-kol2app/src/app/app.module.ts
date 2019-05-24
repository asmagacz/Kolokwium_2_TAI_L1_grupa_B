import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersXYComponent } from './components/orders-xy/orders-xy.component';
import { OrdersItemXYComponent } from './components/orders-item-xy/orders-item-xy.component';
import { OrdersDetailsXYComponent } from './components/orders-details-xy/orders-details-xy.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrdersXYComponent,
    OrdersItemXYComponent,
    OrdersDetailsXYComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
