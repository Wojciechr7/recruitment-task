import { Component, OnInit } from '@angular/core';
import { CardSettingsModel } from '../../../base/models/card-settings.model';

@Component({
  selector: 'recruitment-task-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  cardSettings: CardSettingsModel;

  constructor() { }

  ngOnInit(): void {
    this.cardSettings = new CardSettingsModel('column');
  }

}
