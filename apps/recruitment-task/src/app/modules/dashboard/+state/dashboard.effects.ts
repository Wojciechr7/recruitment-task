import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import * as DashboardActions from './dashboard.actions';
import { DashboardService } from '../services/dashboard.service';
import { map } from 'rxjs/operators';
import { DishModel } from '../models/dish.model';

@Injectable()
export class DashboardEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.init),
      fetch({
        run: (action) => {
          return this.dashboardService.getAllDishes().pipe(
            map((dishes: DishModel[]) => {
              return DashboardActions.loadDashboardSuccess({ dashboard: dishes });
            })
          )
        },

        onError: (action, error) => {
          console.error('Error', error);
          return DashboardActions.loadDashboardFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService
  ) {}

}
