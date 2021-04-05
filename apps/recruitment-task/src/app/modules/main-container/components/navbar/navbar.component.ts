import { Component, OnInit } from '@angular/core';
import { CardSettingsModel } from '../../../base/models/card-settings.model';

@Component({
  selector: 'recruitment-task-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  cardSettings: CardSettingsModel;

  constructor() { }

  ngOnInit(): void {
    this.cardSettings = new CardSettingsModel('column');
  }

}
