import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromApp from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';
import { AppFacade } from './+state/app.facade';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      //{ path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
    ]),
    StoreModule.forRoot(
      { router: routerReducer, app: fromApp.reducer },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        },
        initialState: {
          router: {
            state: {
              url: '/',
              params: {},
              queryParams: {}
            },
            navigationId: 0
          },
          app: fromApp.initialState
        }
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    //StoreModule.forFeature(fromApp.APP_FEATURE_KEY, fromApp.reducer),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [AppFacade],
  bootstrap: [AppComponent]
})
export class AppModule {
}
