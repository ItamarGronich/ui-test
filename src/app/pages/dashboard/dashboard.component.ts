import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../model/activity/activity.service';
import { MessageService } from '../../model/message/message.service';
import { TaskService } from '../../model/task/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // DI.
  constructor(
    private taskService: TaskService,
    private messageService: MessageService,
    private activityService: ActivityService,
  ) { }

  taskList     = [];
  activityList = [];
  messageList  = [];

  getTasks() {
    this.taskService.getTasks().then( tasks => this.taskList = tasks );
  }

  getMessages() {
    this.activityService.getActivities().then( activities => this.activityList = activities );
  }

  getActivities() {
    this.messageService.getMessages().then( messages => this.messageList = messages );
  }

  // Urls for graph images.
  graphs = [
    '/assets/images/graph1.png'
  , '/assets/images/graph2.png'
  ];


  ngOnInit() {

    this.getTasks();
    this.getActivities();
    this.getMessages();
  }

}
