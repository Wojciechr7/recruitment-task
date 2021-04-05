import { Component, OnInit } from '@angular/core';
import { DynamicFormModel } from '../../../dynamic-form/models/dynamic-form.model';
import { FieldTypeEnum } from '../../../dynamic-form/models/fields/form-field-base.model';
import { TextFieldModel, TextFieldTypeEnum } from '../../../dynamic-form/models/fields/text-field.model';
import { AppFacade } from '../../../../+state/app.facade';
import { CardSettingsModel } from '../../../base/models/card-settings.model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'recruitment-task-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: DynamicFormModel;
  cardSettings: CardSettingsModel;

  constructor(
    private appFacade: AppFacade
  ) { }

  ngOnInit(): void {
    this.form = new DynamicFormModel({}, this.getFormFields());
    this.cardSettings = new CardSettingsModel('column');
  }

  submit({login, password}) {
    this.appFacade.login(login, password);
  }

  private getFormFields(): TextFieldModel[] {
    return [
      {
        name: 'login',
        placeholder: 'Login',
        type: FieldTypeEnum.Text,
        textFieldType: TextFieldTypeEnum.Text,
        validators: [Validators.required]
      },
      {
        name: 'password',
        placeholder: 'Password',
        type: FieldTypeEnum.Text,
        textFieldType: TextFieldTypeEnum.Text,
        validators: [Validators.required]
      },
    ]
  }

}
