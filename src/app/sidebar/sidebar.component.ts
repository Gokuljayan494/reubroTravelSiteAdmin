import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  // status: boolean = false;
  // clickEvent() {
  //   this.status = !this.status;
  //   console.log(`hello toggle`);
  // }
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
  loggedIn = false;

  login() {
    // login logic
    this.loggedIn = true;
  }
}
