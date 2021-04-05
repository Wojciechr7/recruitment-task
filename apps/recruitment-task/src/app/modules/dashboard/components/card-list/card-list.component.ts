import { Component, OnInit } from '@angular/core';
import { DashboardFacade } from '../../+state/dashboard.facade';
import { Observable } from 'rxjs';
import { DishModel } from '../../models/dish.model';

@Component({
  selector: 'recruitment-task-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  cart$: Observable<DishModel[]>;

  constructor(
    private dashboardFacade: DashboardFacade
  ) { }

  ngOnInit(): void {
    this.cart$ = this.dashboardFacade.cart$;
  }

  removeDishFromCart(dish: DishModel) {
    this.dashboardFacade.removeFromCart(dish);
  }

}
