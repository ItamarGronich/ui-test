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
import { BadgeComponent } from './components/card/badge/badge.component'

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
    BadgeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
