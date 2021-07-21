import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  images = {
    foxImg :"./../../assets/images/fox.jpg",
    dogImg : "",
    hatImg : "",
    carImg: "",
    shipImg:""
  }

  user = {
   name:"arj",
  img: this.images.foxImg
}
  constructor(
    private fs:AngularFirestore
  ) { }

}
