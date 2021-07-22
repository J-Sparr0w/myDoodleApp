import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewInit {
  @ViewChildren('chatMessages') chatMessages!: QueryList<ElementRef>;

  chats: Chat[] = [
    {
      sender: "arj",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aperiam.That was nice",
      senderImg: "./../../assets/images/fox.jpg"
    },
    {
      sender: "someone",
      message: "lorem12 ",
      senderImg: "./../../../assets/images/magic_mushroom.jpg"
    },
    {
      sender: 'Another person',
      message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo id quaerat aut ipsa atque aliquid?",
      senderImg:"./../../../assets/images/monsterP.jpg"
    }
  ];
  userName = this.chatService.user.name;

  constructor(
    private chatService: ChatService,
    private renderer:Renderer2
  ) { }

  ngAfterViewInit() {
    this.chatMessages.changes.subscribe(
      (changes: QueryList<ElementRef>) => {
        changes.last.nativeElement.scrollIntoView({behavior:'smooth'})
      }
    )
  }

}
