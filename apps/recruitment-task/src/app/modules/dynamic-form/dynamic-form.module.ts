import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { DynamicFormDirective } from './directives/dynamic-form.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatInputModule
]

@NgModule({
  declarations: [
    DynamicFormComponent,
    TextFieldComponent,
    DynamicFormDirective,
  ],
  imports: [
    ...materialModules,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
