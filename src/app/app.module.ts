import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { DoodleService } from './services/doodle.service';
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [DoodleService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
