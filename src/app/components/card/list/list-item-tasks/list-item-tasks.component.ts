import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item-tasks',
  templateUrl: './list-item-tasks.component.html',
  styles: [`p { background: blue;}`]
})
export class ListItemTasksComponent implements OnInit {

  @Input() title: String;

  timestampNow = Date.now();
  private _time = this.timestampNow;

  @Input()
  set time(time: number) {
    this._time = Math.floor((this.timestampNow - time) / (24 * 3600 * 1000))
  };

  get time(): number { return this._time; }

  constructor() { }

  ngOnInit() {
  }

}
