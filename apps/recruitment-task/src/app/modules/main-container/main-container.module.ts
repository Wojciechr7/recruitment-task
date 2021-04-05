import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContainerRoutingModule } from './main-container-routing.module';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    MainContainerComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MainContainerRoutingModule
  ]
})
export class MainContainerModule { }
