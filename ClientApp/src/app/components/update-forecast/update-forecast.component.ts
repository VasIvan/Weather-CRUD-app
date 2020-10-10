import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WeatherService } from '../../weather.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-forecast',
  templateUrl: './update-forecast.component.html',
  styleUrls: ['./update-forecast.component.css'],
})
export class UpdateForecastComponent implements OnInit {
  cities: any = [];
  minDate = new Date();
  selectedCity: string;

  constructor(
    private fb: FormBuilder,
    private weather: WeatherService,
    private snackBar: MatSnackBar,
    private router: ActivatedRoute,
    private routerLink: Router
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
    Id: Number(this.router.snapshot.params.id),
  });

  ngOnInit(): void {
    this.weather
      .getForecastById(this.router.snapshot.params.id)
      .subscribe((result) => {
        this.addForecastForm = this.fb.group({
          Temperature: [
            result['Temperature'],
            [Validators.required, Validators.min(-99), Validators.max(99)],
          ],
          Rain: [
            result['Rain'],
            [Validators.required, Validators.min(0), Validators.max(100)],
          ],
          Wind: [
            result['Wind'],
            [Validators.required, Validators.min(0), Validators.max(100)],
          ],
          Day: [result['Day'], Validators.required],
          City: [result['City'], Validators.required],
          Id: Number(this.router.snapshot.params.id),
        });
      });
    this.weather.getData().subscribe((result) => {
      this.cities = result;
    });
  }

  onSubmit() {
    this.weather
      .updateForecast(
        this.router.snapshot.params.id,
        this.addForecastForm.value
      )
      .subscribe(
        (result) => {
          this.openSnackBar(`Successfully updated forecast!`, 'OK');
        },
        (error) => {
          this.openSnackBar(error.error, 'OK');
        }
      );
    this.routerLink.navigate(['/']);
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, { duration: 10000 });
  }
}
