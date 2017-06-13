import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideMenu } from './components/sideMenu/sideMenu.component'
import { Header } from './components/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    SideMenu,
    Header
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
