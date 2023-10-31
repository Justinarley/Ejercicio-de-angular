import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';
import { AppRoutingModule } from './app-routing.module';
import { WebModule } from './web/web.module';
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    NoPagesFoundComponent,
  ],
  imports: [
    BrowserModule,
    WebModule,
    AuthModule,
    AppRoutingModule,
    AuthRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Justin Altamirano