import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { Field, FormField } from '@angular/forms/signals';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-formControl',
  templateUrl: './formControl.html',
  imports: [FormField, TranslocoDirective],
})
export class FormControl {
  label = input<string>('');
  placeholder = input<string>();
  type = input<HTMLInputElement['type']>('text');
  field = input.required<Field<string>>();

  get invalidField(): boolean {
    return this.field()().touched() && this.field()().errors().length > 0;
  }
}
