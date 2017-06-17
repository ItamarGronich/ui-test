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

  taskList       = [];
  pastTasks      = 2;
  futureTasks    = 5;
  activityList   = [];
  messageList    = [];
  messageBadge  = 0;

  getTasks() {
    this.taskService.getTasks().then( tasks => this.taskList = tasks );
  }

  getMessages() {
    this.messageService.getMessages().then( messages => {
      let badge = messages.filter( el => el.unread ).length
      this.messageBadge = badge;
      this.messageList = messages;
    });
  }

  getActivities() {
    this.activityService.getActivities().then( activities => this.activityList = activities );
  }

  // Urls for graph images.
  graphs = [
    {title: 'Your sales', url:'/assets/images/graph1.png'}
  , {title: 'Report', url:'/assets/images/graph2.png' }
  ];


  ngOnInit() {

    this.getTasks();
    this.getActivities();
    this.getMessages();
  }

}
