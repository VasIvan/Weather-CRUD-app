import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';
describe('PageNotFoundComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [PageNotFoundComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PageNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=page-not-found.component.spec.js.map