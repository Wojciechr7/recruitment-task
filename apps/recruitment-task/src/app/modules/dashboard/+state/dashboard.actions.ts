import { createAction, props } from '@ngrx/store';
import { DishModel } from '../models/dish.model';

export const init = createAction('[Dashboard Page] Init');

export const loadDashboardSuccess = createAction(
  '[Dashboard/API] Load Dashboard Success',
  props<{ dashboard: DishModel[] }>()
);

export const loadDashboardFailure = createAction(
  '[Dashboard/API] Load Dashboard Failure',
  props<{ error: any }>()
);

export const moveDishToCart = createAction(
  '[Dashboard Page] Move Dish To Cart',
  props<{ dish: DishModel }>()
);

export const removeDishFromCart = createAction(
  '[Dashboard Page] Remove Dish From Cart',
  props<{ dish: DishModel }>()
);
