import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './components/canvas/canvas.component';
import { HubComponent } from './components/hub/hub.component';
import { RoomComponent } from './components/room/room.component';

const routes: Routes = [
  {
    path: "", component: HubComponent,

  },
   {path: "canvas",component:CanvasComponent } ,
  {path:"room/:roomId", component:RoomComponent},
  {path:"**", component:HubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
