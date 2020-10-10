import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CardForecastComponent = class CardForecastComponent {
    constructor() {
        this.mockData = {
            Temperature: 40,
            Rain: 74,
            Wind: 62,
            Day: '2020-10-09T21:00:00.000Z',
            City: 'Paris',
        };
        this.symbols = ['%', 'km/h'];
        this.flipRain = true;
        this.flipWind = false;
    }
    ngOnInit() {
        if (this.mockData.Temperature > 20) {
            this.weatherIcon = 'wb_sunny';
            this.weatherColor = 'accent';
        }
        else if (this.mockData.Temperature > 10 &&
            this.mockData.Temperature <= 20) {
            this.weatherIcon = 'filter_drama';
            this.weatherColor = 'primary';
        }
        else if (this.mockData.Temperature > 0 &&
            this.mockData.Temperature <= 10) {
            this.weatherIcon = 'cloud';
            this.weatherColor = 'primary';
        }
        else {
            this.weatherIcon = 'ac_unit';
            this.weatherColor = 'primary';
        }
        setInterval(() => {
            this.flip();
        }, 4000);
    }
    flip() {
        this.flipRain = !this.flipRain;
        this.flipWind = !this.flipWind;
    }
};
CardForecastComponent = __decorate([
    Component({
        selector: 'app-card-forecast',
        templateUrl: './card-forecast.component.html',
        styleUrls: ['./card-forecast.component.css'],
    })
], CardForecastComponent);
export { CardForecastComponent };
//# sourceMappingURL=card-forecast.component.js.map