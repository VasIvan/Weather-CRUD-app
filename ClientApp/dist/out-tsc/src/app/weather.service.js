import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let WeatherService = class WeatherService {
    constructor(http) {
        this.http = http;
        this.url = 'https://localhost:5001/api';
    }
    //Cities
    getData() {
        return this.http.get(`${this.url}/cities`);
    }
    addCity(data) {
        return this.http.post(`${this.url}/cities`, data);
    }
    //Forecast
    addForecast(data) {
        return this.http.post(`${this.url}/weathers`, data);
    }
    getForecastData() {
        return this.http.get(`${this.url}/weathers`);
    }
    getForecastByCityDay(City, Day) {
        return this.http.get(`${this.url}/weathers/${City}&${Day}`);
    }
    deleteForecast(id) {
        return this.http.delete(`${this.url}/weathers/${id}`);
    }
};
WeatherService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], WeatherService);
export { WeatherService };
//# sourceMappingURL=weather.service.js.map