import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IForecast, ICity } from './forecast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url = 'https://localhost:5001/api';
  constructor(private http: HttpClient) {}

  //Cities
  getData(): Observable<ICity[]> {
    return this.http.get<ICity[]>(`${this.url}/cities`);
  }

  addCity(data: object): Observable<ICity> {
    return this.http.post<ICity>(`${this.url}/cities`, data);
  }

  //Forecast
  addForecast(data: object): Observable<IForecast> {
    return this.http.post<IForecast>(`${this.url}/weathers`, data);
  }

  getForecastData(): Observable<IForecast[]> {
    return this.http.get<IForecast[]>(`${this.url}/weathers`);
  }

  getForecastByCityDay(City: string, Day: string): Observable<IForecast> {
    return this.http.get<IForecast>(`${this.url}/weathers/${City}&${Day}`);
  }

  getForecastByCity(City: string): Observable<IForecast> {
    return this.http.get<IForecast>(`${this.url}/weathers/city/${City}`);
  }

  getForecastById(Id: number): Observable<IForecast> {
    return this.http.get<IForecast>(`${this.url}/weathers/${Id}`);
  }

  updateForecast(Id: number, data: object): Observable<IForecast> {
    return this.http.put<IForecast>(`${this.url}/weathers/${Id}`, data);
  }

  deleteForecast (id: number) {
    return this.http.delete<IForecast>(`${this.url}/weathers/${id}`);
  }
}
