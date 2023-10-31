import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { WebComponent } from './web.component';
import { RouterModule } from '@angular/router';
import { WebRoutingModule } from './web-routing.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent,
    DashboardComponent,
    WebComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    WebRoutingModule,
    AppRoutingModule
  ],
  exports: [
    ProductComponent,
    CategoryComponent,
    DashboardComponent,
    WebComponent,
    WebRoutingModule
  ]
})
export class WebModule { }
// Justin Altamirano