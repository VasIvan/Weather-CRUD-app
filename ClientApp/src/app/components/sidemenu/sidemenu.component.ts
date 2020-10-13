import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  @Output() setOpenedFalse: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeSidebar(): void {
    this.setOpenedFalse.emit();
  }
}
