import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HookComponent, Forms1Component } from './components';


const routes: Routes = [
  { path: '', redirectTo: '/forms', pathMatch: 'full' },
  { path: 'hook', component: HookComponent },
  { path: 'forms', component: Forms1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
