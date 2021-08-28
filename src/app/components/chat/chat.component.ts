import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chat } from 'src/app/models/chat';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewInit,OnDestroy {
  @ViewChildren('chatMessages') chatMessages!: QueryList<ElementRef>;

  chats:Chat[] = [
    {
      sender: "arj",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aperiam.That was nice",
      senderImg: "./../../assets/images/fox.jpg"
    },
    {
      sender: "someone",
      message: "lorem12 ",
      senderImg: "./../../../assets/images/boat.jpg"
    },
    {
      sender: 'Another person',
      message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo id quaerat aut ipsa atque aliquid?",
      senderImg:"./../../../assets/images/cat.jpg"
    },
    {
      sender: "someone",
      message: "lorem12 ",
      senderImg: "./../../../assets/images/boat.jpg"
    },
    {
      sender: 'Another person',
      message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo id quaerat aut ipsa atque aliquid?",
      senderImg:"./../../../assets/images/cat.jpg"
    }
  ];
  userName = this.chatService.user.name;
  chatSubscription!: Subscription;
  chatTemplateSubscription!: Subscription;

  constructor(
    private chatService: ChatService,
    private renderer:Renderer2
  ) { }

  ngAfterViewInit() {




//     this.chatSubscription=   this.chatService.getChatDb().subscribe(
//       (data:Chat[]) => {
//         console.log(data);
//         const latestMessage = data.length-1;
//         this.chats.push(data[latestMessage]);

//   }
// )

  this.chatTemplateSubscription=  this.chatMessages.changes.subscribe(
      (changes: QueryList<ElementRef>) => {
        changes.last.nativeElement.scrollIntoView({behavior:'smooth'})
      }
    )

  }

  ngOnDestroy() {
    this.chatSubscription.unsubscribe();
    this.chatTemplateSubscription.unsubscribe();
}


}
