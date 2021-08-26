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


  constructor(
    private chatService: ChatService,
    private renderer:Renderer2
  ) { }

  ngAfterViewInit() {

    // this.chatService.getChat().subscribe(
    //   (data) => {
    //    data.forEach(chat => {
    //      this.chats.push(chat);
    //      console.log(this.chats);
    //     });
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // )


//     this.chatService.getChatDb().subscribe(
//       (data) => {
//         console.log(data);
//         data.forEach((messageReceived) => {
//           console.log(messageReceived);
//           this.chats.push(messageReceived);
//         })
//   }
// )

    this.chatMessages.changes.subscribe(
      (changes: QueryList<ElementRef>) => {
        changes.last.nativeElement.scrollIntoView({behavior:'smooth'})
      }
    )
    // setInterval(() => {
    //   this.chats.push({
    //     sender: "arj",
    //     message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aperiam.That was nice",
    //     senderImg: "./../../assets/images/fox.jpg"
    //   })
    // },Math.random()*3000);


  }

}
