import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item-tasks',
  template: `
  <div class="wrapper">
    <a class="Icon" href="">{{ title[0].toUpperCase() }}</a>
    <a class="Task">
      <h5>{{ title }}</h5>
      <p>{{ time === 0  ? 'Due today' : time > 0 ? time + ' days left' : (time *-1) + ' days delays' }}</p>
    </a>
    <a class="Options"><img src="/assets/images/icons/options.png"></a>
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
    this._time = Math.floor(( time - this.timestampNow ) / (24 * 3600 * 1000))
  };

  get time(): number { return this._time; }

  constructor() { }

  ngOnInit() {
  }

}
