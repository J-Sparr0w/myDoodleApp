import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { DoodleService } from './services/doodle.service';
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './services/chat.service';
import { RoomComponent } from './components/room/room.component';
import { HubComponent } from './components/hub/hub.component';
import { HubService } from './services/hub.service';
import { AvatarCardComponent } from './components/avatar-card/avatar-card.component';
import { RoomService } from './services/room.service';
import { FeedbackCanvasComponent } from './components/feedback-canvas/feedback-canvas.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    ChatComponent,
    RoomComponent,
    HubComponent,
    AvatarCardComponent,
    FeedbackCanvasComponent,
    LeaderboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    DoodleService,
    ChatService,
    HubService,
    RoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
