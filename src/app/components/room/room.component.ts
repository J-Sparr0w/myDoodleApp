import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  isTyping = false;

  isCurrentPlayer = false;
  linkId!: string;
  word= ["S","O","M","E","T","H","I","N","G"]

  constructor(
    private route: ActivatedRoute,
    private _chatService:ChatService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param => {
        console.log(param);
      }
    )
  }
  sendMessage(message: string) {
    if (!message)
      return;
    console.log('something')
    // this._chatService.addNewMessage({
    //   sender: "your username",
    //   message: message,
    //   senderImg: "imgUrl"
    // });
}
}
