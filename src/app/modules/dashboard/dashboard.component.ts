import { Component, OnInit } from '@angular/core';
import { cardInfo } from 'src/app/interfaces/cardinfo';
import { CardService } from 'src/app/service/card/card.service';
import { ChartService } from 'src/app/service/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{
  Cards:any=[]
  bigChart:any=[]
 constructor(private readonly cardService:CardService,private chartService:ChartService){}
 ngOnInit(): void {
   this.getData()
   this.bigChart=this.chartService.bigChart()
  }
  getData(){
    this.Cards=this.cardService.getCardData()
  }

}
