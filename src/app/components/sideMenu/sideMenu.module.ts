import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SideMenu } from './sideMenu.component';

@NgModule({
  declarations: [
    SideMenu
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SideMenu]
})
export class SideMenuModule { }
