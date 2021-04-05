import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { CardListComponent } from './components/card-list/card-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MenuListComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
