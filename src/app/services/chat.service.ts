import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
  linkId = "pGFdW3ogObPinYcJG2pD";
  private _chatMessages = this.fs.collection<Chat>(`doodles/${this.linkId}/chats`);
  private _chatDb = this.db.list<Chat>(`doodleRooms/chats`);

    constructor(
      private fs: AngularFirestore,
      private db: AngularFireDatabase
  ) { }

  // getChat() :Observable<Chat[]>{
  //   // return this._chatMessages.valueChanges();
  // }

  updateChat(msg:Chat) {
    // return this._chatMessages.add(msg);
  }

  getChatDb() {
    return this._chatDb.valueChanges();
  }

  addNewMessage(latestMessage:Chat) {
    return this._chatDb.push(latestMessage);
  }
}
