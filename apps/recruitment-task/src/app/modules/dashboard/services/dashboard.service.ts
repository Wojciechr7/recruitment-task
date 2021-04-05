import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DishModel, DishTypeEnum } from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getAllDishes(): Observable<DishModel[]> {
    return of(
      [
        new DishModel('Burger Cheese', 'classic + cheddar', DishTypeEnum.Burger),
        new DishModel('Burger BBQ', 'classic + bekon, sos BBQ', DishTypeEnum.Burger),
        new DishModel('Burger Tropical', 'classic + cheddar + grilowany ananas', DishTypeEnum.Burger),
        new DishModel('Pasta Pepperoni', 'pepperoni, sos pomidorowy, papryczki jalapeno', DishTypeEnum.Pasta),
        new DishModel('Pasta La Cotta', 'pomidorki cherry, pomidor świeży, papryczki chili', DishTypeEnum.Pasta),
        new DishModel('Pasta Gemberetti', 'krewetki tygrysie, sos świetanowy, cukinia, papryczka chili', DishTypeEnum.Pasta)
      ]
    );
  }

}
