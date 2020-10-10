import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { AddForecastComponent } from './components/add-forecast/add-forecast.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCityComponent } from './components/add-city/add-city.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CardForecastComponent } from './components/card-forecast/card-forecast.component';
import { ForecastTableComponent } from './components/forecast-table/forecast-table.component';
import { CardForecastSpinnerComponent } from './components/card-forecast-spinner/card-forecast-spinner.component';
import { UpdateForecastComponent } from './components/update-forecast/update-forecast.component';
import { ForecastChartComponent } from './components/forecast-chart/forecast-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    AddForecastComponent,
    AddCityComponent,
    HomeComponent,
    PageNotFoundComponent,
    CardForecastComponent,
    ForecastTableComponent,
    CardForecastSpinnerComponent,
    UpdateForecastComponent,
    ForecastChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
