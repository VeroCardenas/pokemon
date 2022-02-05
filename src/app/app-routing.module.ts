import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagepokemonComponent } from './managepokemon/managepokemon.component';

const routes: Routes = [
  {path:'', component: ManagepokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
