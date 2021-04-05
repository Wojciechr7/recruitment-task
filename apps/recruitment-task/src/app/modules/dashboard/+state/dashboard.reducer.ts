import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as DashboardActions from './dashboard.actions';
import { DishModel } from '../models/dish.model';

export const DASHBOARD_FEATURE_KEY = 'dashboard';

export interface State extends EntityState<DishModel> {
  selectedId?: string | number; // which Dashboard record has been selected
  loaded: boolean; // has the Dashboard list been loaded
  error?: string | null; // last known error (if any)
  cart: DishModel[];
}

export interface DashboardPartialState {
  readonly [DASHBOARD_FEATURE_KEY]: State;
}

export const dashboardAdapter: EntityAdapter<DishModel> = createEntityAdapter<DishModel>();

export const initialState: State = dashboardAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  cart: []
});

const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
    cart: []
  })),
  on(DashboardActions.loadDashboardSuccess, (state, { dashboard }) =>
    dashboardAdapter.setAll(dashboard, { ...state, loaded: true })
  ),
  on(DashboardActions.loadDashboardFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(DashboardActions.moveDishToCart, (state, { dish }) =>
    dashboardAdapter.setOne({ ...dish, available: false }, { ...state, cart: [...state.cart, dish] })
  ),
  on(DashboardActions.removeDishFromCart, (state, { dish }) =>
    dashboardAdapter.setOne({ ...dish, available: true }, { ...state, cart: state.cart.filter(v => v.id !== dish.id) })
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return dashboardReducer(state, action);
}
