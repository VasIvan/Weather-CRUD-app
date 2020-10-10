import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { WeatherService } from '../../weather.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css'],
})
export class AddCityComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private weather: WeatherService,
    private snackBar: MatSnackBar
  ) {}

  addCityForm = this.fb.group({
    RegisterCity: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(32)],
    ],
  });

  ngOnInit(): void {}

  onSubmit(formDirective: FormGroupDirective) {
    this.weather.addCity(this.addCityForm.value).subscribe(
      () => {
        this.openSnackBar('Successfully added new city! ', 'ok');
      },
      (error) => {
        this.openSnackBar(error.error, 'ok');
      }
    );
    formDirective.resetForm();
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, { duration: 10000 });
  }
}
