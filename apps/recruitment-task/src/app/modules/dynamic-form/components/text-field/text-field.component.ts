import { Component, Input, OnInit } from '@angular/core';
import { TextFieldModel } from '../../models/fields/text-field.model';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'recruitment-task-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  @Input() field: TextFieldModel;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get Control(): AbstractControl {
    return this.form.get(this.field.name);
  }

}
