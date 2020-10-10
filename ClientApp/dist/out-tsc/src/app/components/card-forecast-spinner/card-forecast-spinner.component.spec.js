import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { CardForecastSpinnerComponent } from './card-forecast-spinner.component';
describe('CardForecastSpinnerComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [CardForecastSpinnerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CardForecastSpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=card-forecast-spinner.component.spec.js.map