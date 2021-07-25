import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HubService {
  docId = "";

  user: User = {
    userId: "",
    username: "",
  };
  constructor(
    private fs:AngularFirestore
  ) { }

  joinLink() {
    if (!this.user||!this.user.isHost)
      return;
    console.log(this.user.userId, this.user.username);
    // this.fs.collection("doodles").doc(this.docId).set(this.user);
    // sessionStorage.setItem('isLoggedIn',"true")
    // sessionStorage.setItem('roomLink',JSON.stringify(this.docId))
    // sessionStorage.setItem('isLoggedIn',JSON.stringify(true))
    console.log("Room Created");
  }
}
