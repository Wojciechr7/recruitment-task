import { ValidatorFn } from '@angular/forms';

export class FormFieldBaseModel {
  name: string;
  placeholder: string;
  type: FieldTypeEnum;
  validators: ValidatorFn[];
}

export enum FieldTypeEnum {
  Text
}
