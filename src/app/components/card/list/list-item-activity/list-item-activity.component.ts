import { Component, OnInit, Input } from '@angular/core';
import { TimeTo } from '../../../../services/time-to.service';

@Component({
  selector: 'app-list-item-activity',
  template: `
  <div class="wrapper">
    <img src="{{icon}}" alt="" class="Icon">
    <div class="Activity">
      <h5>{{ uName ? uName : 'Anonymous' }}<span>{{ message }}</span></h5>
      <p>{{ textTime }}</p>
    </div>
  </div>
  `,
  styleUrls: ['./list-item-activity.component.scss']
})

export class ListItemActivityComponent implements OnInit {

  constructor(private timeTo: TimeTo) { }


  @Input() uName: String;
  @Input() message: String;
  @Input() icon: String;

  private textTime = 'Just now';

  @Input()
  set time(time: Date) {

    this.textTime = this.timeTo.human(time);

  };

  ngOnInit() {
  }

}
