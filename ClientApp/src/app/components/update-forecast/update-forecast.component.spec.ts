import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateForecastComponent } from './update-forecast.component';

describe('UpdateForecastComponent', () => {
  let component: UpdateForecastComponent;
  let fixture: ComponentFixture<UpdateForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
