import { Component, Input, OnInit } from '@angular/core';
import { CardSettingsModel } from '../../models/card-settings.model';

@Component({
  selector: 'recruitment-task-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() settings: CardSettingsModel;

  constructor() { }

  ngOnInit(): void {
  }

}
