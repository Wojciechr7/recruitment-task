import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as AppActions from './app.actions';
import { UserModel } from '../modules/login/models/user.model';

export const APP_FEATURE_KEY = 'app';

export interface State extends EntityState<UserModel> {
  selectedId?: string | number; // which App record has been selected
  loaded: boolean; // has the App list been loaded
  error?: string | null; // last known error (if any)
  loggedInUser?: UserModel;
}

export interface AppPartialState {
  readonly [APP_FEATURE_KEY]: State;
}

export const appAdapter: EntityAdapter<UserModel> = createEntityAdapter<UserModel>();

export const initialState: State = appAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const appReducer = createReducer(
  initialState,
  on(AppActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(AppActions.loadAppSuccess, (state, { app }) =>
    appAdapter.setAll(app, { ...state, loaded: true })
  ),
  on(AppActions.loadAppFailure, (state, { error }) => ({ ...state, error })),
  on(AppActions.loginSuccess, (state, { user }) =>
    appAdapter.addOne(user, { ...state, loggedInUser: user })
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return appReducer(state, action);
}
