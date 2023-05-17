import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonneComponent } from './component/abonne/abonne.component';

const routes: Routes = [
  {path:"abonne",component:AbonneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
