import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private weather: WeatherService) {}

  collection = {};

  ngOnInit(): void {
    this.weather.getData().subscribe((result) => {
      console.log(result);
      this.collection = result;
    });
  }
}
