import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { CardForecastComponent } from './card-forecast.component';
describe('CardForecastComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [CardForecastComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CardForecastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=card-forecast.component.spec.js.map