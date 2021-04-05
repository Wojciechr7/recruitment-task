import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { AppFacade } from '../+state/app.facade';
import { UserModel } from '../modules/login/models/user.model';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private appFacade: AppFacade
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.appFacade.loggedInUser$.pipe(
      map((user: UserModel) => {
        if (!user) {
          this.router.navigate(['/login']);
        }

        return !!user;
      })
    )

  }

}
