import { Component, ElementRef, OnInit } from '@angular/core';
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
  private userId!: string;


  constructor(private _hubService:HubService) { }

  ngOnInit(): void {
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

  joinRoom() {
    this._hubService.joinLink(this.linkId!);
  }
}
