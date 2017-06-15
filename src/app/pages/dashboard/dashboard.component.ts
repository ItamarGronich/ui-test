import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cardLists = {
    tasks: []
  , messages: []
  , activity: []
  };
  graphs = [
      '/assets/images/graph1.png'
    , '/assets/images/graph1.png'
  ]

  constructor() { }

  ngOnInit() {
  }

}
