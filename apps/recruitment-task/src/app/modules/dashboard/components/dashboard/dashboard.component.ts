import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DishModel } from '../../models/dish.model';
import { log } from 'util';
import { DashboardFacade } from '../../+state/dashboard.facade';

@Component({
  selector: 'recruitment-task-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dishes$: Observable<DishModel[]>;

  constructor(
    private route: ActivatedRoute,
    private dashboardFacade: DashboardFacade
  ) { }

  ngOnInit(): void {
    //this.dishes = this.route.snapshot.data['dishes'];

    this.dishes$ = this.dashboardFacade.allDashboard$;
  }

}
