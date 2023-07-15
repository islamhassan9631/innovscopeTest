import { Component, Input, OnInit } from '@angular/core';
import { cardInfo } from 'src/app/interfaces/cardinfo';
import { CardService } from 'src/app/service/card/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
@Input() Card:Array<cardInfo>|any
  
  ngOnInit(): void {
  //  this.getData()
  }
 
  
}
