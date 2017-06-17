import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Data for the lists in the list cards.
  cardLists = [
    {
      type: 'tasks'
    , badges: [5, 2]
    , data: [
          { title: 'New Website for Symu.co', time: new Date() }
        , { title: 'Free business PSD Template', time: new Date() }
        , { title: 'New logo for JCD.pl', time: new Date() }
        , { title: 'Free icons Set vol.3', time: new Date() }
      ]
    }
    , {
      type: 'messages'
    , badges: [2]
    , data: [
          { uName: 'Nina Jones', message: 'Hey you! it\'s me again i\'ve attached new information regarding ', time: new Date('June 16, 2017 16:40:00'), icon: '/assets/images/icons/user1.png' }
        , { uName: 'Nina Jones', message: 'Hey I\'ve attached some new PSD files for you to go over.', time: new Date('June 14, 2017 16:40:00'), icon: '/assets/images/icons/user1.png' }
        , { uName: 'James Smith', message: 'Good morning! You are fired!', time: new Date(), icon: '/assets/images/icons/user2.png' }
        , { uName: 'Nina Jones', message: 'Hello could you bring me cofee please?', time: new Date(), icon: '/assets/images/icons/user1.png' }
      ]
    }
    , {
      type: 'activity'
    , badges: [10]
    , data: [
          { uName: 'Nina Jones', message: 'Hey you! it\'s me again i\'ve attached new information regarding ', time: new Date(), icon: '/assets/images/icons/user1.png' }
        , { uName: 'Nina Jones', message: 'Hey I\'ve attached some new PSD files for you to go over.', time: new Date(), icon: '/assets/images/icons/user2.png' }
        , { uName: 'James Smith', message: 'Good morning! You are fired!', time: new Date('June 5, 2017 16:40:00'), icon: '/assets/images/icons/user3.png' }
        , { uName: 'Nina Jones', message: 'Hello could you bring me cofee please?', time: new Date('June 1, 2017 13:13:00'), icon: '/assets/images/icons/user4.png' }
      ]
    }
  ];

  // Urls for graph images.
  graphs = [
    '/assets/images/graph1.png'
  , '/assets/images/graph2.png'
  ]

  constructor() { }

  ngOnInit() {
  }

}
