import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Main app component class.
export class AppComponent {
  title = 'app';

  menuOpen: boolean = true;

  toggleMenu(event) {
    this.menuOpen = event;
  }

}
