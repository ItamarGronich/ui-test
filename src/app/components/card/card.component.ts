import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() list: Array<Object>;
  @Input() type: String;
  @Input() itemType: String;
  @Input() title: String;
  @Input() badges: String[];

  ngOnInit() {
  }

}
