import { Component, OnInit, Input } from '@angular/core'


@Component({
  selector: 'app-list-item-messages',
  template: `<p>Ha!</p>`,
  styles: ['p  {background: blue;}']
})
export class ListItemMessagesComponent implements OnInit {

    @Input() uName: String;
    @Input() message: String;
    @Input() icon: String;
    @Input() time: Date;

  constructor() { }

  ngOnInit() {
  }

}
