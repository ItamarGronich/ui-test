import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideMenu } from './components/sideMenu/sideMenu.component'
import { Header } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    SideMenu,
    Header,
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
