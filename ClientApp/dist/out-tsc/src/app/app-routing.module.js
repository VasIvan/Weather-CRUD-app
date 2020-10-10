import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddCityComponent } from './components/add-city/add-city.component';
import { AddForecastComponent } from './components/add-forecast/add-forecast.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
const routes = [
    {
        component: AddCityComponent,
        path: 'add-city',
    },
    {
        component: AddForecastComponent,
        path: 'add-forecast',
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
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map