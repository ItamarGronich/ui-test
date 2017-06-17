import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideMenu } from './components/sideMenu/sideMenu.component'
import { Header } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { GraphComponent } from './components/card/graph/graph.component';
import { ListComponent } from './components/card/list/list.component';
import { FilterComponent } from './components/card/filter/filter.component';
import { BadgeComponent } from './components/card/badge/badge.component';
import { ListItemTasksComponent } from './components/card/list/list-item-tasks/list-item-tasks.component';
import { ListItemMessagesComponent } from './components/card/list/list-item-messages/list-item-messages.component';
import { ListItemActivityComponent } from './components/card/list/list-item-activity/list-item-activity.component';
import { TimeTo } from './services/time-to.service';
import { Backend } from './services/backend.service';
import { ActivityService } from './model/activity/activity.service';
import { MessageService } from './model/message/message.service';
import { TaskService } from './model/task/task.service';


@NgModule({
  declarations: [
    AppComponent,
    SideMenu,
    Header,
    DashboardComponent,
    CardComponent,
    GraphComponent,
    ListComponent,
    FilterComponent,
    BadgeComponent,
    ListItemTasksComponent,
    ListItemMessagesComponent,
    ListItemActivityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Backend,
    TaskService,
    MessageService,
    ActivityService,
    TimeTo
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
