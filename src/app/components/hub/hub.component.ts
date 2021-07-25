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
  private userId!: string;


  constructor(private hubService:HubService) { }

  ngOnInit(): void {
  }

  enableLink(value:boolean) {
    this.hasSelectedAvatar = true;
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
 return  this.hubService.docId = this.linkId;
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

    this.hubService.user = {
      userId: this.userId,
      username: value,
      isHost:true
    }

    this.hasSelectedUsername = true;
  }

  joinRoom() {
    this.hubService.joinLink();
  }
}
