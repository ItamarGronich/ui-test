import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'top-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class Header {

  @Input() open: boolean = true;

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggle() {
    this.open = !this.open;
    this.change.emit(this.open);
  }

}
