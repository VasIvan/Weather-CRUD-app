import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ForecastTableComponent } from './forecast-table.component';
describe('ForecastTableComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ForecastTableComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ForecastTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=forecast-table.component.spec.js.map