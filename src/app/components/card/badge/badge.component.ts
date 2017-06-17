import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() amount: Number;
  @Input() red: boolean;

  constructor() { }

  ngOnInit() {
  }

}
