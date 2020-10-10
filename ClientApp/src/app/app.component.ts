import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ClientApp';
  opened = false;

  sidenavToggle() {
    this.opened = !this.opened;
  }

  setOpenedFalse() {
    this.opened = false;
  }
}
