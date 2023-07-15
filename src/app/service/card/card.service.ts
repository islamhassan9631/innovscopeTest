import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
card:any[]=[{
  total: 8,
  icon:"star",
  label:"Task Completed",
  image:"../../../../assets/imgs/Vector 3.svg"
},{
  total: 10,
  icon:"note_add",
  label:"New Task ",
  image:"../../../../assets/imgs/Vector 3 (1).svg"
},{
  total: 10,
  icon:"description",
  label:"Project Done ",
  image:"../../../../assets/imgs/Vector 3 (2).svg"
}
]
  constructor() { }

  getCardData(){
    return this.card
  }
}
