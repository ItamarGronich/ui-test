import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sideMenu',
  templateUrl: './sideMenu.component.html',
  styleUrls: ['./sideMenu.component.scss']
})

export class SideMenu {

  sideMenuItems = [
    {title: 'home', imgSrc: 'assets/images/home.png'},
    {title: 'workflow', imgSrc: 'assets/images/workflow.png'},
    {title: 'statistics', imgSrc: 'assets/images/statistics.png'},
    {title: 'calendar', imgSrc: 'assets/images/calendar.png'},
    {title: 'users', imgSrc: 'assets/images/users.png'},
    {title: 'settings', imgSrc: 'assets/images/settings.png'},
  ];

}
