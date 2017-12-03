import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  //{ path: 'todo/:id', component: TodoComponent},
  { path: 'todo', component: TodolistComponent},
  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
