import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DashboardFacade } from '../+state/dashboard.facade';
import { DishModel } from '../models/dish.model';
import { filter, first } from 'rxjs/operators';

@Injectable()
export class DishesResolver implements Resolve<DishModel[]> {

  constructor(private dashboardFacade: DashboardFacade) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DishModel[]> {
    this.dashboardFacade.init();
    return this.dashboardFacade.allDashboard$.pipe(filter(v => !!v.length), first());
  }
}
