import { Component, OnInit, Input } from '@angular/core';
import { TimeTo } from '../../../../services/time-to.service';


@Component({
  selector: 'app-list-item-messages',
  template: `
  <div class="wrapper">
    <img src="{{icon}}" alt="" class="Icon">
    <div class="Message">
      <h5>{{ uName ? uName : 'Anonymous' }}<span>{{ textTime }}</span></h5>
      <p>{{ message }}</p>
      <img src="/assets/images/icons/share.png" alt="Share" class="Share"/>
      <img src="/assets/images/icons/settings.png" alt="Settings" class="Settings"/>
    </div>
  </div>
  `,
  styleUrls: ['./list-item-messages.component.scss']
})

export class ListItemMessagesComponent implements OnInit {

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
