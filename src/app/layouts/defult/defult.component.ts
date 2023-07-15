import { Component } from '@angular/core';

@Component({
  selector: 'app-defult',
  templateUrl: './defult.component.html',
  styleUrls: ['./defult.component.css'],

})
export class DefultComponent {
  sidebarOpen = false;

  sidebarToggle(){
    this.sidebarOpen = !this.sidebarOpen;
  }
}
