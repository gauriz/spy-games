import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpyGameComponent } from './components/spy-game/spy-game.component';

const routes: Routes = [
  { path: '', component: SpyGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
