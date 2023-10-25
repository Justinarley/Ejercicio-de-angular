import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    UsersComponent,
  ]
})
export class AuthModule { }
