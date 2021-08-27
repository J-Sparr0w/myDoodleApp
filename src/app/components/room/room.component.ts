import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat.service';
import { HubService } from 'src/app/services/hub.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  isTyping = false;

  isCurrentPlayer = false;
  linkId = sessionStorage.getItem('roomLink');
  word= ["S","O","M","E","T","H","I","N","G"]

  user: User= this._hubService.userInfo;

  constructor(
    private route: ActivatedRoute,
    private _chatService: ChatService,
    private _hubService: HubService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param => {
        console.log(param);
        console.log(param.get('roomId'));

        if (this.linkId != param.get('roomId'))
        {
          this.linkId = param.get('roomId');
          return console.log("wrong room");
        }
      }
    )
  }


  sendMessage(message: string) {
    if (!message)
      return;

    console.log('sending message')

    this._chatService.addNewMessage({
      sender: this.user.userId,
      message: message,
      senderImg: this.user.imgUrl
    });
  }


}
