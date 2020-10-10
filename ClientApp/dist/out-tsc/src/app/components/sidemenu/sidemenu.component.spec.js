import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { SidemenuComponent } from './sidemenu.component';
describe('SidemenuComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [SidemenuComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SidemenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sidemenu.component.spec.js.map