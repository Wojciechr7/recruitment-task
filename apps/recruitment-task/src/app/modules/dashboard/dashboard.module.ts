import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { BaseModule } from '../base/base.module';
import { MenuListItemComponent } from './components/menu-list/menu-list-item/menu-list-item.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MenuListComponent,
    CardListComponent,
    MenuListItemComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BaseModule
  ]
})
export class DashboardModule { }
