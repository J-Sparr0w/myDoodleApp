import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {



  user = {
   name:"arj",
}
  constructor(
    private fs:AngularFirestore
  ) { }

}
