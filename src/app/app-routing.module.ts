import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './component/region/region.component';
import { ParticipantComponent } from './component/participant/participant.component';

const routes: Routes = [
  {path:"region_formulaire",component:RegionComponent},
  {path:"participant_formulaire",component:ParticipantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
