import * as moment from 'moment/moment';
import { v4 as uuidv4 } from 'uuid';

export class UserModel {
  id?: string;
  login: string;
  password: string;
  tokenExpirationDate: moment.Moment;

  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;

    this.id = uuidv4();
    this.tokenExpirationDate = moment();
  }
}
