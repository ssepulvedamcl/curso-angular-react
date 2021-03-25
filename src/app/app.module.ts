import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'
import { AboutComponent } from './about.component';
import { ForecastComponent } from './forecast.component';
import { WeatherComponent } from './weather.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ForecastComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
