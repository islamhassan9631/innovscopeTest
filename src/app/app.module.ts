import { DefultModule } from './layouts/defult/defult.module';
import { NgModule ,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { defaults } from 'chart.js';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   DefultModule,
     FormsModule,
   

  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
