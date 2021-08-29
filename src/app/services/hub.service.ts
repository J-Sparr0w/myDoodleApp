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
    if (!this.user)
      return;
    // console.log(this.user.userId, this.user.username);


     this._linkId = link;
     const _playerRef = `doodleRooms/${this._linkId}/players`;
     const _players = this._db.list(_playerRef);


     if (!this._linkId || !this.user.userId) return;

     _players.push(this.user);

    // store data about room and player in session storage
     sessionStorage.setItem('roomLink',JSON.stringify(this._linkId))
     sessionStorage.setItem('isLoggedIn',JSON.stringify(true))
    // storing playerData in sessionStorage
    sessionStorage.setItem('userId', JSON.stringify(this.user.userId))
     sessionStorage.setItem('username',JSON.stringify(this.user.username))
     sessionStorage.setItem('imgUrl',JSON.stringify(this.user.imgUrl))
     sessionStorage.setItem('isHost', JSON.stringify(this.user.isHost))

     console.log("Room Created");
    }

  getPlayers(link:string) {
    // function to retrieve the player count from database to display in the waiting area.

    this._linkId = link;

    if (!this.user || !this._linkId)
      return;

  const _playerRef = `doodleRooms/${this._linkId}/players`;
  const playerCount = this._db.list<User>(_playerRef);

    return playerCount.valueChanges();
  }
}
