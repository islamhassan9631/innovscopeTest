import { Component, Input } from '@angular/core';
import { Message } from 'src/app/interfaces/messagebox';

@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.css']
})
export class MessageboxComponent {
  @Input() Message:Message|any
}
