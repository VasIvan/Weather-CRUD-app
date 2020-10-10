import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ForecastFormTestComponent = class ForecastFormTestComponent {
    constructor() { }
    ngOnInit() { }
    onSubmitParent(data) {
        console.log(data);
    }
};
ForecastFormTestComponent = __decorate([
    Component({
        selector: 'app-forecast-form-test',
        templateUrl: './forecast-form-test.component.html',
        styleUrls: ['./forecast-form-test.component.css'],
    })
], ForecastFormTestComponent);
export { ForecastFormTestComponent };
//# sourceMappingURL=forecast-form-test.component.js.map