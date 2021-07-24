import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HubService {
  link = "";

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
    // this.fs.doc(`doodles/${this.link}`).set(this.user);
    console.log("Room Created");
  }
}
