import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HubService {

 private user: User = {
    userId: "",
    username: "",
    imgUrl: "./../../../assets/images/dog.jpg"
  };

  private _linkId = "";

  constructor(
    private _db: AngularFireDatabase,
  ) { }

  get userInfo():User {
    return this.user;
    }

   setUserInfo({userId,username,imgUrl,isHost}:User) {
     this.user = { userId, username, isHost, imgUrl };
     console.log(this.user);
  }

  joinLink(link:string) {
    if (!this.user||!this.user.isHost)
      return;
    // console.log(this.user.userId, this.user.username);


     this._linkId = link;
     const _playerRef = `doodleRooms/${this._linkId}/users`;
     const _players = this._db.list(_playerRef);


    if (!this._linkId || !this.user.userId) return;

    // _players.push(this.user);
    sessionStorage.setItem('roomLink',JSON.stringify(this._linkId))
    sessionStorage.setItem('isLoggedIn',JSON.stringify(true))
    console.log("Room Created");
  }
}
