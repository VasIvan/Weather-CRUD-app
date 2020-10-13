import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { WeatherService } from '../../weather.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forecast-chart',
  templateUrl: './forecast-chart.component.html',
  styleUrls: ['./forecast-chart.component.css'],
})
export class ForecastChartComponent implements OnInit {
  constructor(private weather: WeatherService, private snackBar: MatSnackBar) {}
  cities = [];
  selectedCity: string;
  chart = [];
  cityName = '';
  cityDay = [];
  cityTemperature = [];

  ngOnInit(): void {
    this.weather.getData().subscribe((result) => {
      this.cities = result;
    });
  }

  onSelectChange(city: string): void {
    this.cityName = city;
    this.cityDay = [];
    this.cityTemperature = [];

    this.weather.getForecastByCity(city).subscribe(
      (result) => {
        Object.values(result).map((item) => {
          this.cityDay.push(item.Day.slice(0, -9));
          this.cityTemperature.push(item.Temperature);
        });

        this.chart = new Chart('canvas-city', {
          type: 'line',
          data: {
            labels: this.cityDay,
            datasets: [
              {
                label: this.cityName,
                data: this.cityTemperature,
                backgroundColor: 'red',
                borderColor: 'red',
                fill: false,
              },
            ],
          },
        });
      },
      (error) => {
        this.openSnackBar(error.error, 'OK');
      }
    );
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, { duration: 10000 });
  }
}
