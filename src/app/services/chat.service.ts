import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from '../models/chat';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user = {
   name:"arj",
  }
  linkId = JSON.parse(sessionStorage.getItem('roomLink')!);
  private _chatDb = this._db.list<Chat>(`doodleRooms/${this.linkId}/chats`);

    constructor(
      private _db: AngularFireDatabase
  ) { }

  // getChat() :Observable<Chat[]>{
  //   // return this._chatMessages.valueChanges();
  // }

  updateChat(msg:Chat) {
    // return this._chatMessages.add(msg);
  }

  getChatDb() {
    // return this._chatDb.valueChanges();
  }

  addNewMessage(latestMessage: Chat) {
    if (!this.linkId)
      return console.log("no linkId for chat service")

    console.log(this.linkId);
    console.log("message sent");
    // return this._chatDb.push(latestMessage);
  }
}
