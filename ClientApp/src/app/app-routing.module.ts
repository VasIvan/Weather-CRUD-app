import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCityComponent } from './components/add-city/add-city.component';
import { AddForecastComponent } from './components/add-forecast/add-forecast.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UpdateForecastComponent } from './components/update-forecast/update-forecast.component';
import { CardForecastComponent } from './components/card-forecast/card-forecast.component';
import { ForecastChartComponent } from './components/forecast-chart/forecast-chart.component';

const routes: Routes = [
  {
    component: AddCityComponent,
    path: 'add-city',
  },
  {
    component: AddForecastComponent,
    path: 'add-forecast',
  },
  {
    component: CardForecastComponent,
    path: 'card-forecast',
  },
  {
    component: ForecastChartComponent,
    path: 'forecast-chart',
  },
  {
    component: UpdateForecastComponent,
    path: 'update-forecast/:id',
  },
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: PageNotFoundComponent,
    path: '**',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
