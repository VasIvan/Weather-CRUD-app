import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let NavbarComponent = class NavbarComponent {
    constructor() {
        this.sidenavToggle = new EventEmitter();
    }
    ngOnInit() { }
    sidenavToggleFromNavbar() {
        this.sidenavToggle.emit();
    }
};
__decorate([
    Output()
], NavbarComponent.prototype, "sidenavToggle", void 0);
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css'],
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map