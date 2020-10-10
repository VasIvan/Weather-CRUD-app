import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ForecastFormComponent } from './forecast-form.component';
describe('ForecastFormComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ForecastFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ForecastFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=forecast-form.component.spec.js.map