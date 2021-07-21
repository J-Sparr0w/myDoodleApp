import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  userImg = this.chatService.user.img;
  userImgDesc = "Red Fox";
  chats: Chat[] = [
    {
      sender: "arj",
      message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aperiam.That was nice"
    },
    {
      sender: "someone",
      message:"lorem12 "
    },
    {
      sender: 'Another person',
      message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo id quaerat aut ipsa atque aliquid?"
    }
  ];
  userName = this.chatService.user.name;

  constructor(
    private chatService:ChatService
  ) { }

  ngOnInit(): void {
  }

}
