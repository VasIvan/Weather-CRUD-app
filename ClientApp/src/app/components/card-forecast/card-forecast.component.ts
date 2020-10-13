import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Mock {
  Temperature: number;
  Rain: number;
  Wind: number;
  Day: string;
  City: string;
}

@Component({
  selector: 'app-card-forecast',
  templateUrl: './card-forecast.component.html',
  styleUrls: ['./card-forecast.component.css'],
})
export class CardForecastComponent implements OnInit {
  mockData: Mock = {
    Temperature: 40,
    Rain: 74,
    Wind: 62,
    Day: '2020-10-09T21:00:00.000Z',
    City: 'Paris',
  };
  weatherIcon: string;
  weatherColor: string;
  symbols = ['%', 'km/h'];
  flipRain = true;
  flipWind = false;
  cities = [];
  selectedCity: string;

  cardTemperature: number;
  cardRain: number;
  cardWind: number;
  cardDay: string;
  cardCity: string;

  dataDBarived: boolean;

  constructor(
    private weather: WeatherService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  cardForecastForm = this.fb.group({
    Day: '',
    City: '',
  });

  ngOnInit(): void {
    this.setIconColor(this.mockData.Temperature);

    setInterval(() => {
      this.flip();
    }, 4000);

    this.weather.getData().subscribe((result) => {
      this.cities = result;
    });

    this.dataDBarived = false;
  }

  flip(): void {
    this.flipRain = !this.flipRain;
    this.flipWind = !this.flipWind;
  }

  onSubmit(): void {
    this.cardForecastForm.value.Day.setHours(
      this.cardForecastForm.value.Day.getHours() + 5
    );
    this.cardForecastForm.value.Day = this.cardForecastForm.value.Day.toISOString().slice(
      0,
      -5
    );
    this.weather
      .getForecastByCityDay(
        this.cardForecastForm.value.City,
        this.cardForecastForm.value.Day
      )
      .subscribe(
        (result) => {
          this.cardTemperature = result['Temperature'];
          this.cardRain = result['Rain'];
          this.cardWind = result['Wind'];
          this.cardDay = result['Day'];
          this.cardCity = result['City'];

          this.dataDBarived = true;
          this.setIconColor(this.cardTemperature);
        },
        (error) => {
          this.openSnackBar(error.error, 'OK');
        }
      );
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, { duration: 10000 });
  }

  setIconColor(temperature: number): void {
    if (temperature > 20) {
      this.weatherIcon = 'wb_sunny';
      this.weatherColor = 'accent';
    } else if (temperature > 10 && temperature <= 20) {
      this.weatherIcon = 'filter_drama';
      this.weatherColor = 'primary';
    } else if (temperature > 0 && temperature <= 10) {
      this.weatherIcon = 'cloud';
      this.weatherColor = 'primary';
    } else {
      this.weatherIcon = 'ac_unit';
      this.weatherColor = 'primary';
    }
  }
}
