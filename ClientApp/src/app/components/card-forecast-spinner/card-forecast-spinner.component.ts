import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-forecast-spinner',
  templateUrl: './card-forecast-spinner.component.html',
  styleUrls: ['./card-forecast-spinner.component.css'],
})
export class CardForecastSpinnerComponent implements OnInit {
  @Input() value;
  @Input() symbol;

  constructor() {}

  ngOnInit(): void {}
}
