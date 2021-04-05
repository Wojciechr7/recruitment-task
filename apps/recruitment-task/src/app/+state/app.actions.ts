import { createAction, props } from '@ngrx/store';
import { UserModel } from '../modules/login/models/user.model';

export const init = createAction('[App Page] Init');

export const loadAppSuccess = createAction(
  '[App/API] Load App Success',
  props<{ app: UserModel[] }>()
);

export const loadAppFailure = createAction(
  '[App/API] Load App Failure',
  props<{ error: any }>()
);

export const login = createAction(
  '[Login Page] Login',
  props<{ login: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ user: UserModel }>()
);

export const loginFailure = createAction(
  '[Login Page] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Login Page] Logout');
