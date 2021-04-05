import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContainerRoutingModule } from './main-container-routing.module';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BaseModule } from '../base/base.module';


@NgModule({
  declarations: [
    MainContainerComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MainContainerRoutingModule,
    BaseModule
  ]
})
export class MainContainerModule { }
