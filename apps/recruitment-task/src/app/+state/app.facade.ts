import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as AppActions from './app.actions';
import * as AppFeature from './app.reducer';
import * as AppSelectors from './app.selectors';

@Injectable()
export class AppFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(AppSelectors.getAppLoaded));
  allApp$ = this.store.pipe(select(AppSelectors.getAllApp));
  selectedApp$ = this.store.pipe(select(AppSelectors.getSelected));

  constructor(private store: Store) {
  }

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(AppActions.init());
  }

  login(login: string, password: string) {
    this.store.dispatch(AppActions.login({ login, password }));
  }
}
