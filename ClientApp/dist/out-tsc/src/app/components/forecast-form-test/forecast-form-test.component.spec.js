import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ForecastFormTestComponent } from './forecast-form-test.component';
describe('ForecastFormTestComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ForecastFormTestComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ForecastFormTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=forecast-form-test.component.spec.js.map