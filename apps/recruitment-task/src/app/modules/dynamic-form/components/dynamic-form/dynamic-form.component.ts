import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DynamicFormModel } from '../../models/dynamic-form.model';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { FormFieldBaseModel } from '../../models/fields/form-field-base.model';

@Component({
  selector: 'recruitment-task-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() dynamicFormData: DynamicFormModel;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  dynamicFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.dynamicFormGroup = this.createFormGroup();
  }

  formSubmitted(form: NgForm) {
    if (form.valid) {
      this.submitted.emit(form.value);
    }
  }

  private createFormGroup(group = {}): FormGroup {
    this.dynamicFormData.fields.forEach((field: FormFieldBaseModel) => {
      group[field.name] = new FormControl('', field.validators);
    });

    return new FormGroup(group);
  }

}
