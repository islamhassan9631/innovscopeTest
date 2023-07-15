import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/messagebox';
import { MessageService } from 'src/app/service/message/message.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent implements OnInit {
  messages:Array<Message> |any
  constructor(private readonly messageService:MessageService){}
  ngOnInit(): void {
   this.getMessage()
  }

getMessage(){
 this.messages= this.messageService.getAllMessage()
  
}

}
