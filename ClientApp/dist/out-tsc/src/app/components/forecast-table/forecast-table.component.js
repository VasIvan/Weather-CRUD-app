import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
/* interface ForecastData {
  Temperature: number;
  Rain: number;
  Wind: number;
  Day: string;
  City: string;
} */
let ForecastTableComponent = class ForecastTableComponent {
    constructor(weather, snackBar) {
        this.weather = weather;
        this.snackBar = snackBar;
        this.displayedColumns = [
            'Day',
            'City',
            'Temperature',
            'Rain',
            'Wind',
            'Actions',
        ];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.weather.getForecastData().subscribe((result) => {
            this.dataSource = new MatTableDataSource(result);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    onDelete(id) {
        this.weather.deleteForecast(id).subscribe((result) => {
            this.getData();
            this.snackBar.open(`Forecast for:  ${result['City']} on ${result['Day']} has been deleted!`, 'OK', { duration: 10000 });
        });
    }
};
__decorate([
    ViewChild(MatSort)
], ForecastTableComponent.prototype, "sort", void 0);
__decorate([
    ViewChild(MatPaginator)
], ForecastTableComponent.prototype, "paginator", void 0);
ForecastTableComponent = __decorate([
    Component({
        selector: 'app-forecast-table',
        templateUrl: './forecast-table.component.html',
        styleUrls: ['./forecast-table.component.css'],
    })
], ForecastTableComponent);
export { ForecastTableComponent };
//# sourceMappingURL=forecast-table.component.js.map