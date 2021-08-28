import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { HubService } from 'src/app/services/hub.service';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {
  linkId?:string ;
  fullLink = "www.linkid.com/"
  hasSelectedAvatar?: boolean;
  hasSelectedUsername?: boolean;
  selectedImgUrl!: string;
  selectedUsername!: string;
  hasEnteredLink = false;


  playerCountSub?: Subscription; //Subscription starts in the joinRoom() (i.e after player has entered username, selected an avatar and joinedRoom)
  players: User[] = [
  ];
  playerCount = 0;

  private userId!: string;

  redirectedUser = false;

  constructor(private _hubService:HubService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.playerCount = this.players.length;

    //if the user was redirected then the create game room button will not be enabled
    this.redirectedUser=this.checkForRoomId();
  }

  // function to check if the user was redirected to login page
  checkForRoomId() {
    const roomId = this._route.snapshot.queryParams.roomId;
    console.log(`roomId in hub: ${roomId}`);
    if (roomId)
    {
      this.linkId = roomId;
      this.fullLink= `${this.fullLink}${roomId}`
      return true;
    }
    else
      return false;
}


  enableLink(avatar:string) {
    this.hasSelectedAvatar = true;
    this.selectedImgUrl = avatar;

    if (this.hasSelectedUsername)
    this._hubService.setUserInfo({
      userId: this.userId,
      username: this.selectedUsername,
      isHost: true,
      imgUrl:this.selectedImgUrl
    });
  }



  createUID(parts:number,nameId?:string) {


    if (!nameId) {
      //if the link has already been created or the avatar has not been selected, link creation cannot happen
      if (this.linkId || !this.hasSelectedAvatar)
      return;
    }

      const stringArr = [];

      for(let i = 0; i< parts; i++){
        // tslint:disable-next-line:no-bitwise
        const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        stringArr.push(S4);
      }

    if (nameId) {
    return this.userId = stringArr.join('-');
     }

    this.fullLink = "www.linkid.com/";
    this.linkId = stringArr.join('-');
    this.fullLink += this.linkId;
 return  this.linkId;
  }

  copyLink() {
    if (!this.linkId)
      return;

      navigator.clipboard.writeText(this.linkId)
      .then(
        ()=>console.log("copied")
        )
    }

 addUsername(value: string) {
   this.createUID(4, value);

   this.hasSelectedUsername = true;
   this.selectedUsername = value;

   if (!this.selectedImgUrl ) return;


   this._hubService.setUserInfo({
    userId: this.userId,
    username: value,
    isHost: true,
    imgUrl:this.selectedImgUrl
  });
  }

  // if link is entered manually
  linkInput(value: string) {
    // if www.link.com/9090-9090 is going to be the link,
    // the numbers at the end are checked to see if there are 8 digits and a "-"
    const roomId = value.split('/')[1];

    if (!roomId)
      return;
    if (roomId.length != 9 || value.split('/').length != 2)
    {
      this.hasEnteredLink = false;
      return;
      }

    this.hasEnteredLink = true;
  }

  joinRoom(link?: string) {

    if (link) {
      // if there is link passed as argument then it was entered manually by the user
      this.fullLink = link ;
      this.linkId = link?.split('/')[1];
    }
    this._hubService.joinLink(this.linkId!);

    // starts a subscription to display no. of players joined in the waiting area
    this.playerCountSub = this._hubService.getPlayerCount()?.subscribe(
      users => {
        this.players = [...users]
        this.playerCount = this.players.length;
        }
    )
  }
}
