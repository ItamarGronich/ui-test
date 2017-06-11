import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sideMenu',
  templateUrl: './sideMenu.component.html',
  styleUrls: ['./sideMenu.component.scss']
})

export class SideMenu {

  sideMenuItems = [
    {title: 'home', imgSrc: 'assets/images/home.png', active: 'active'},
    {title: 'workflow', imgSrc: 'assets/images/workflow.png', active: ''},
    {title: 'statistics', imgSrc: 'assets/images/statistics.png', active: ''},
    {title: 'calendar', imgSrc: 'assets/images/calendar.png', active: ''},
    {title: 'users', imgSrc: 'assets/images/users.png', active: ''},
    {title: 'settings', imgSrc: 'assets/images/settings.png', active: ''},
  ];

}
