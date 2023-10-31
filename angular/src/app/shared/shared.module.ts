import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    HeadComponent,
    FooterComponent,
    BreadcrumsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeadComponent,
    FooterComponent,
    BreadcrumsComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
// Justin Altamirano