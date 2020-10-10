import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let AddForecastComponent = class AddForecastComponent {
    constructor(fb, weather, snackBar) {
        this.fb = fb;
        this.weather = weather;
        this.snackBar = snackBar;
        this.cities = [];
        this.minDate = new Date();
        this.addForecastForm = this.fb.group({
            Temperature: [
                '',
                [Validators.required, Validators.min(-99), Validators.max(99)],
            ],
            Rain: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
            Wind: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
            Day: ['', Validators.required],
            City: ['', Validators.required],
        });
    }
    ngOnInit() {
        this.weather.getData().subscribe((result) => {
            this.cities = result;
        });
    }
    onSubmit(formDirective) {
        this.weather.addForecast(this.addForecastForm.value).subscribe((result) => {
            this.openSnackBar(`Successfully added new forecast for ${result['City']}!`, 'OK');
        }, (error) => {
            this.openSnackBar(error.error, 'OK');
        });
        formDirective.resetForm();
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, { duration: 10000 });
    }
};
AddForecastComponent = __decorate([
    Component({
        selector: 'app-add-forecast',
        templateUrl: './add-forecast.component.html',
        styleUrls: ['./add-forecast.component.css'],
    })
], AddForecastComponent);
export { AddForecastComponent };
//# sourceMappingURL=add-forecast.component.js.map