import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const components = [
  CardComponent,
  ListItemComponent
];

const materialModules = [
  MatCardModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...materialModules,
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    ...components,
    ...materialModules,
    FlexLayoutModule
  ]
})
export class BaseModule { }
