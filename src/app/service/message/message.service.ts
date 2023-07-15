import { Injectable } from '@angular/core';
import { Message } from 'src/app/interfaces/messagebox';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
message:any=[{
  id:1,
  name:"Yassin Mustafa",
  description:"Hi Angelina! How are You?",
  image:"../../../../assets/imgs/portrait-handsome-bearded-european-man-with-grey-hair-beard-smiles-pleasantly-looks-directly-front-being-good-mood-has-lucky-day-wears-spectacles-sweater-isolated-blue-wall.svg"
},{
  id:1,
  name:"Yassin Mustafa",
  description:"Hi Angelina! How are You?",
  image:"../../../../assets/imgs/portrait-handsome-bearded-european-man-with-grey-hair-beard-smiles-pleasantly-looks-directly-front-being-good-mood-has-lucky-day-wears-spectacles-sweater-isolated-blue-wall.svg"
},{
  id:1,
  name:"Yassin Mustafa",
  description:"Hi Angelina! How are You?",
  image:"../../../../assets/imgs/portrait-handsome-bearded-european-man-with-grey-hair-beard-smiles-pleasantly-looks-directly-front-being-good-mood-has-lucky-day-wears-spectacles-sweater-isolated-blue-wall.svg"
}]
  constructor() { }
  getAllMessage(){
    return this.message
  }
}
