import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let AddCityComponent = class AddCityComponent {
    constructor(fb, weather, snackBar) {
        this.fb = fb;
        this.weather = weather;
        this.snackBar = snackBar;
        this.addCityForm = this.fb.group({
            RegisterCity: [
                '',
                [Validators.required, Validators.minLength(2), Validators.maxLength(32)],
            ],
        });
    }
    ngOnInit() { }
    onSubmit(formDirective) {
        this.weather.addCity(this.addCityForm.value).subscribe(() => {
            this.openSnackBar('Successfully added new city! ', 'ok');
        }, (error) => {
            this.openSnackBar(error.error, 'ok');
        });
        formDirective.resetForm();
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, { duration: 10000 });
    }
};
AddCityComponent = __decorate([
    Component({
        selector: 'app-add-city',
        templateUrl: './add-city.component.html',
        styleUrls: ['./add-city.component.css'],
    })
], AddCityComponent);
export { AddCityComponent };
//# sourceMappingURL=add-city.component.js.map