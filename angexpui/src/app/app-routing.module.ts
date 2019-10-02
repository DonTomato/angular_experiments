import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HookComponent } from './components';


const routes: Routes = [
  { path: 'hook', component: HookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
