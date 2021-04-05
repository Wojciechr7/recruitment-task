import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ListItemComponent } from './components/list-item/list-item.component';



@NgModule({
  declarations: [
    CardComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BaseModule { }
