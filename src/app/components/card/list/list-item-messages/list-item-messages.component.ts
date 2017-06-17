import { Component, OnInit, Input } from '@angular/core';
import { TimeTo } from '../../../../services/time-to.service';


@Component({
  selector: 'app-list-item-messages',
  template: `
  <div>
    <img src="{{icon}}" alt="">
    <h5>{{ uName ? uName : 'Anonymous' }}<span>{{ textTime }}</span></h5>
    <p>{{ message }}</p>
    <img src="" alt="" />
  </div>
  `,
  styles: ['']
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
