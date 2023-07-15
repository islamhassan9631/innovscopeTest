import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-scheudle',
  templateUrl: './scheudle.component.html',
  styleUrls: ['./scheudle.component.css']
})
export class ScheudleComponent {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
}
