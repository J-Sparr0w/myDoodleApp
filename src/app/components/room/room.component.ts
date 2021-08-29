import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat.service';
import { HubService } from 'src/app/services/hub.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit,OnDestroy {
  isTyping = false;

  linkId = JSON.parse(sessionStorage.getItem('roomLink')!);
  word= ["S","O","M","E","T","H","I","N","G"]

  isCurrentPlayer!:boolean;
  currentPlayer!: User;
  players: User[] = [
    {
      userId: "",
      username: "arjoo",
      imgUrl: "./../../../assets/images/magic_hat.jpg",
      score:10
    },
    {
      userId: "",
      username: "someone",
      imgUrl: "./../../../assets/images/dog.jpg",
      score:100
    },
    {
      userId: "",
      username: "someone else",
      imgUrl: "./../../../assets/images/cat.jpg",
      score:99
    },
    {
      userId: "",
      username: "arjoo",
    imgUrl:"./../../../assets/images/boat.jpg",
    score:60
    },

  ];




  playerSub?: Subscription;

  user!: User;

  constructor(
    private route: ActivatedRoute,
    private _chatService: ChatService,
    private _hubService: HubService
  ) { }

  ngOnInit(): void {
    // function to initialize this.user value
    this.getUserInfo();

    this.route.paramMap.subscribe(
      param => {
        if (this.linkId != param.get('roomId'))
        {
          this.linkId = param.get('roomId');
          return console.log("wrong room");
        }
      })

    // subscription to get all currently joined players
  // this.playerSub=  this._hubService.getPlayers(this.linkId)?.subscribe(
  //     players => {
  //       this.players=[...players]
  //       console.log(this.players);
  //       //function to set the current player
  //       this.setCurrentPLayer();
  //     }
  //   );

  }


  getUserInfo() {
    // function to initialize this.user value
    if (this._hubService.userInfo.userId)
    {
     this.user= this._hubService.userInfo;
    }
    else {
      this.user = {
        userId:JSON.parse(sessionStorage.getItem('userId')!),
        username:JSON.parse(sessionStorage.getItem('username')!),
        imgUrl:JSON.parse(sessionStorage.getItem('imgUrl')!),
        isHost:JSON.parse(sessionStorage.getItem('isHost')!)
      }
    }

    console.log(`user: ${this.user.username}`)
  }

   setCurrentPLayer() {
    //function to set the current player randomly
    // const totalPlayers = this.players.length;
    //  const i = Math.floor(Math.random() * totalPlayers);

    // this.currentPlayer = this.players[i];
    //  console.log(`currentPLayer: ${this.currentPlayer.username}`)

     //for ease of developing
    this.currentPlayer = this.players[0];
     console.log(`currentPLayer: ${this.currentPlayer.username}`)


     if (this.user.userId == this.currentPlayer.userId) {
       this.isCurrentPlayer = true;
     }
     else {
       this.isCurrentPlayer = false;
     }
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

  ngOnDestroy() {
    this.playerSub?.unsubscribe();
}
}
