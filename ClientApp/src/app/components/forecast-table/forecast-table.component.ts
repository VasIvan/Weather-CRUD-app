import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forecast-table',
  templateUrl: './forecast-table.component.html',
  styleUrls: ['./forecast-table.component.css'],
})
export class ForecastTableComponent implements OnInit {
  displayedColumns: string[] = [
    'Day',
    'City',
    'Temperature',
    'Rain',
    'Wind',
    'Actions',
  ];
  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private weather: WeatherService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.weather.getForecastData().subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(id: number): void {
    this.weather.deleteForecast(id).subscribe((result) => {
      this.getData();
      this.snackBar.open(
        `Forecast for:  ${result['City']} on ${result['Day']} has been deleted!`,
        'OK',
        { duration: 10000 }
      );
    });
  }
}
