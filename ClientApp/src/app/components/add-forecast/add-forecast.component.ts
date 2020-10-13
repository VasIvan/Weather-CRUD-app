import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { WeatherService } from '../../weather.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-forecast',
  templateUrl: './add-forecast.component.html',
  styleUrls: ['./add-forecast.component.css'],
})
export class AddForecastComponent implements OnInit {
  cities = [];
  minDate = new Date();
  selectedCity: string;

  constructor(
    private fb: FormBuilder,
    private weather: WeatherService,
    private snackBar: MatSnackBar
  ) {}

  addForecastForm = this.fb.group({
    Temperature: [
      '',
      [Validators.required, Validators.min(-99), Validators.max(99)],
    ],
    Rain: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    Wind: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    Day: ['', Validators.required],
    City: ['', Validators.required],
  });

  ngOnInit(): void {
    this.weather.getData().subscribe((result) => {
      this.cities = result;
    });
  }

  onSubmit(formDirective: FormGroupDirective): void {
    this.addForecastForm.value.Day.setHours(
      this.addForecastForm.value.Day.getHours() + 5
    );
    this.addForecastForm.value.Day = this.addForecastForm.value.Day.toISOString();

    this.weather.addForecast(this.addForecastForm.value).subscribe(
      (result) => {
        this.openSnackBar(
          `Successfully added new forecast for ${result['City']}!`,
          'OK'
        );
      },
      (error) => {
        this.openSnackBar(error.error, 'OK');
      }
    );
    formDirective.resetForm();
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, { duration: 10000 });
  }
}
