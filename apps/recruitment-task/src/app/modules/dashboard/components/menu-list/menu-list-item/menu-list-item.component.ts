import { Component, Input, OnInit } from '@angular/core';
import { DishModel, DishTypeEnum } from '../../../models/dish.model';
import { DashboardFacade } from '../../../+state/dashboard.facade';

@Component({
  selector: 'recruitment-task-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss']
})
export class MenuListItemComponent implements OnInit {

  @Input() dish: DishModel;

  constructor(
    private dashboardFacade: DashboardFacade
  ) { }

  ngOnInit(): void {
  }

  addToCart(dish: DishModel) {
    this.dashboardFacade.addToCart(dish);
  }

  getImgName(dish: DishModel): string {
    switch (dish.type) {
      case DishTypeEnum.Burger:
        return 'burger.jpg';

      case DishTypeEnum.Pasta:
        return 'pasta.jpg';
    }
  }

}
