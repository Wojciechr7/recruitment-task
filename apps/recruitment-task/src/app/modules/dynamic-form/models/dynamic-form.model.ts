import { FormSettingsModel } from './form-settings.model';
import { FormFieldBaseModel } from './fields/form-field-base.model';

export class DynamicFormModel {
  settings: FormSettingsModel;
  fields: FormFieldBaseModel[];

  constructor(settings: FormSettingsModel, fields: FormFieldBaseModel[]) {
    this.settings = settings;
    this.fields = fields;
  }
}
