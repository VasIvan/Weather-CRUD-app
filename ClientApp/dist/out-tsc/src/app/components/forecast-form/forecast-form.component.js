import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
let ForecastFormComponent = class ForecastFormComponent {
    constructor(fb, weather, snackBar) {
        this.fb = fb;
        this.weather = weather;
        this.snackBar = snackBar;
        this.onSubmitParent = new EventEmitter();
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
        /* this.onSubmitParent(formDirective); */
    }
};
__decorate([
    Input()
], ForecastFormComponent.prototype, "name", void 0);
__decorate([
    Input()
], ForecastFormComponent.prototype, "dataFromParent", void 0);
__decorate([
    Output()
], ForecastFormComponent.prototype, "onSubmitParent", void 0);
ForecastFormComponent = __decorate([
    Component({
        selector: 'app-forecast-form',
        templateUrl: './forecast-form.component.html',
        styleUrls: ['./forecast-form.component.css'],
    })
], ForecastFormComponent);
export { ForecastFormComponent };
//# sourceMappingURL=forecast-form.component.js.map