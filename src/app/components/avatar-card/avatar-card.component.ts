import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Avatars } from 'src/app/models/avatars/avatars';


@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.scss']
})
export class AvatarCardComponent implements OnInit {
  avatars = [...Avatars];
  hasSelectedAvatar = false;
  selectedAvatar?: string;

  @Output() selectionMade = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  selectAvatar(avatar:string):string {
    if (!avatar) { return ""; }

    this.hasSelectedAvatar = true;
    this.selectedAvatar = avatar;
    this.selectionMade.emit(true);
    return avatar;
  }
}
