import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  @Input() players!: User[];


  constructor() { }

  ngOnInit(): void {
    this.calculateScoreBoard(this.players);

  }

  calculateScoreBoard(playerArray:Array<User>) {
    playerArray.sort((first, second) => first.score! - second.score!).reverse()
  }

}
