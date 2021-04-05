import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from './modules/login/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getUsers(): Observable<UserModel[]> {
    return of(
      [
        new UserModel('admin', 'admin'),
        new UserModel('test', 'test')
      ]
    )
  }

}
