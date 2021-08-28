import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './components/canvas/canvas.component';
import { HubComponent } from './components/hub/hub.component';
import { RoomComponent } from './components/room/room.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "", redirectTo:"hub",pathMatch:"full"

  },
   {path: "hub",component:HubComponent } ,
   {path: "canvas",component:CanvasComponent } ,
  {path:"room/:roomId", component:RoomComponent,canActivate:[AuthGuard]},
  {path:"**", component:HubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
