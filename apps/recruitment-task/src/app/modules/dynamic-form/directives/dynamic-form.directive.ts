import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { TextFieldComponent } from '../components/text-field/text-field.component';
import { FieldTypeEnum, FormFieldBaseModel } from '../models/fields/form-field-base.model';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[recruitmentTaskDynamicForm]'
})
export class DynamicFormDirective implements OnInit {

  @Input() field: FormFieldBaseModel;
  @Input() form: FormGroup;

  component: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    const component = this.getComponent(this.field);
    const factory = this.resolver.resolveComponentFactory<any>(component);

    this.component = this.container.createComponent(factory);
    this.component.instance.field = this.field;
    this.component.instance.form = this.form;
  }

  private getComponent(field: FormFieldBaseModel) {
    switch (field.type) {
      case FieldTypeEnum.Text:
        return TextFieldComponent;

      default:
        return null;
    }
  }

}
