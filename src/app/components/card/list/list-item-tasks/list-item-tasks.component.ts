import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item-tasks',
  template: `
  <div>
    <a class="Icon" href="">{{ title[0].toUpperCase() }}</a>
    <a class="Task">
      <h5>{{ title }}</h5>
      <p>{{ time ? time : 'Due today' }}</p>
    </a>
    <a><img src="/assets/images/icons/options.png"></a>
  </div>
`,
  styleUrls: ['./list-item-tasks.component.scss']
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
