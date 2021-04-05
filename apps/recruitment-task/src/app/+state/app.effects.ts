import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import * as AppActions from './app.actions';
import { AppService } from '../app.service';
import { first, map, tap } from 'rxjs/operators';
import { UserModel } from '../modules/login/models/user.model';
import { select, Store } from '@ngrx/store';
import * as AppSelectors from './app.selectors';
import { Router } from '@angular/router';

@Injectable()
export class AppEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.init),
      fetch({
        run: (action) => {
          return this.appService.getUsers().pipe(
            map((users: UserModel[]) => {
              return AppActions.loadAppSuccess({ app: users });
            })
          )
        },

        onError: (action, error) => {
          console.error('Error', error);
          return AppActions.loadAppFailure({ error });
        },
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.login),
      fetch({
        run: (action) => {
          return this.store.pipe(
            select(AppSelectors.getAllApp),
            first(),
            map((users: UserModel[]) => {
              const foundUser: UserModel = users.find((user: UserModel) => user.login === action.login && user.password === action.password);
              this.router.navigate(['/dashboard']);

              if (foundUser) {
                return AppActions.loginSuccess({ user: foundUser });
              }

              return AppActions.loginFailure(null);
            })
          )
        },

        onError: (action, error) => {
          console.error('Error', error);
          return AppActions.loginFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private appService: AppService,
    private store: Store,
    private router: Router
  ) {}
}
