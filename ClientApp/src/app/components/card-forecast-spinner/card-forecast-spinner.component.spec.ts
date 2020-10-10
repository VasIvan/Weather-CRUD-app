import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardForecastSpinnerComponent } from './card-forecast-spinner.component';

describe('CardForecastSpinnerComponent', () => {
  let component: CardForecastSpinnerComponent;
  let fixture: ComponentFixture<CardForecastSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardForecastSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardForecastSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
