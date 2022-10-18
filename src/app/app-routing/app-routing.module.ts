import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../component/home/home.component';
import { LoginComponent } from 'src/app/component/login/login.component';


const routes:Routes=[
  {path: '', component: HomeComponent},
  {path: 'Login', component: LoginComponent}
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
