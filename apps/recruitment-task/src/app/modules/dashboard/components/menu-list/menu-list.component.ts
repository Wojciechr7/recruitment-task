import { Component, Input, OnInit } from '@angular/core';
import { DishModel } from '../../models/dish.model';

@Component({
  selector: 'recruitment-task-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {

  @Input() dishes: DishModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
