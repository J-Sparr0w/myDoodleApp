import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user = {
   name:"arj",
  }
  linkId = "pGFdW3ogObPinYcJG2pD";
  private chatMessages = this.fs.collection<Chat>(`doodles/${this.linkId}/chats`);

  constructor(
    private fs:AngularFirestore
  ) { }

  getChat() :Observable<Chat[]>{
    // return this.chatMessages.valueChanges();
  }

  updateChat(msg:Chat) {
    // return this.chatMessages.add(msg);
  }

}
