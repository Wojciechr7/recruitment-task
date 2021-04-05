import { FormFieldBaseModel } from './form-field-base.model';

export class TextFieldModel extends FormFieldBaseModel {
  textFieldType: TextFieldTypeEnum;
}

export enum TextFieldTypeEnum {
  Text,
  Number
}
