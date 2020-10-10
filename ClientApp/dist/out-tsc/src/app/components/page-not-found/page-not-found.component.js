import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PageNotFoundComponent = class PageNotFoundComponent {
    constructor(weather) {
        this.weather = weather;
        this.collection = {};
    }
    ngOnInit() {
        this.weather.getData().subscribe((result) => {
            console.log(result);
            this.collection = result;
        });
    }
};
PageNotFoundComponent = __decorate([
    Component({
        selector: 'app-page-not-found',
        templateUrl: './page-not-found.component.html',
        styleUrls: ['./page-not-found.component.css'],
    })
], PageNotFoundComponent);
export { PageNotFoundComponent };
//# sourceMappingURL=page-not-found.component.js.map