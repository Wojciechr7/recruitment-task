import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DishesResolver } from './helpers/dishes.resolver';

const routes: Routes = [
  { path: '', component: DashboardComponent, resolve: { dishes: DishesResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
