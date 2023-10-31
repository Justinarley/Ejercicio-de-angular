import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebRoutingModule } from './web/web-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';



const routes: Routes = [
   {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  // { path: '**', component: NoPagesFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    WebRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// Justin Altamirano