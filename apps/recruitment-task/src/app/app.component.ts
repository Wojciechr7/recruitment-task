import { Component } from '@angular/core';
import { AppFacade } from './+state/app.facade';

@Component({
  selector: 'recruitment-task-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recruitment-task';

  constructor(private appFacade: AppFacade) {
    this.appFacade.init();
  }

}
