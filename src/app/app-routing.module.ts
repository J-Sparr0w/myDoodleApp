import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './components/canvas/canvas.component';
import { HubComponent } from './components/hub/hub.component';

const routes: Routes = [
  {
    path: "", component: HubComponent,
   
  },
  {path:"hub/room", component:CanvasComponent},
  {path:"**", component:HubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
