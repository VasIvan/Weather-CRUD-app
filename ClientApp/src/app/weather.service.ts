import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url = 'https://localhost:5001/api';
  constructor(private http: HttpClient) {}

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

  getForecastByCity(City) {
    return this.http.get(`${this.url}/weathers/city/${City}`);
  }

  getForecastById(Id) {
    return this.http.get(`${this.url}/weathers/${Id}`);
  }

  updateForecast(Id, data) {
    return this.http.put(`${this.url}/weathers/${Id}`, data);
  }

  deleteForecast(id) {
    return this.http.delete(`${this.url}/weathers/${id}`);
  }
}
