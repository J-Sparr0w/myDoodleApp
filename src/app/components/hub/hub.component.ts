import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {
  linkId = "";
  fullLink = "www.linkid.com/"

  constructor() { }

  ngOnInit(): void {
  }


  createLink(parts:number) {

    this.fullLink = "www.linkid.com/";
    const stringArr = [];

    for(let i = 0; i< parts; i++){
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    this.linkId=stringArr.join('-')
    this.fullLink += this.linkId;
  }

  copyLink() {
    navigator.clipboard.writeText(this.linkId)
      .then(
      ()=>console.log("copied")
    )
  }
}
