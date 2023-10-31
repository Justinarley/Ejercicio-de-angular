import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      // { path: '', component: DashboardComponent },
    { path: 'product', component: ProductComponent },
      { path: 'category', component: CategoryComponent },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forChild(routes)
  ]
})
export class WebRoutingModule { }
