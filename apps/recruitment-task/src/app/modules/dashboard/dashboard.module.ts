import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { BaseModule } from '../base/base.module';
import { MenuListItemComponent } from './components/menu-list/menu-list-item/menu-list-item.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDashboard from './+state/dashboard.reducer';
import { DashboardEffects } from './+state/dashboard.effects';
import { DashboardFacade } from './+state/dashboard.facade';
import { DishesResolver } from './helpers/dishes.resolver';

@NgModule({
  declarations: [
    DashboardComponent,
    MenuListComponent,
    CardListComponent,
    MenuListItemComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BaseModule,
    StoreModule.forFeature(
      fromDashboard.DASHBOARD_FEATURE_KEY,
      fromDashboard.reducer
    ),
    EffectsModule.forFeature([DashboardEffects]),
  ],
  providers: [
    DashboardFacade,
    DishesResolver
  ],
})
export class DashboardModule {}
