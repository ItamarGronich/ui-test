import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item-activity',
  template: `<p>Ho</p>`,
  styles: ['p {background: red;}']
})
export class ListItemActivityComponent implements OnInit {

  @Input() uName: String;
  @Input() message: String;
  @Input() icon: String;
  @Input() time: Date;

  constructor() { }

  ngOnInit() {
  }

}
