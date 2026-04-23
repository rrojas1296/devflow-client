import { Component, computed, input } from '@angular/core';
import { Field, FormField } from '@angular/forms/signals';
import { TranslocoDirective } from '@jsverse/transloco';
import { cn } from '@/app/shared/utils/cn';

@Component({
  selector: 'app-formControl',
  templateUrl: './formControl.html',
  imports: [FormField, TranslocoDirective],
})
export class FormControl {
  label = input<string>('');
  placeholder = input<string>();
  customClass = input<string | undefined>('');
  sended = input<boolean>(false);
  type = input<HTMLInputElement['type']>('text');
  field = input.required<Field<string>>();
  classes = computed(() => cn('flex flex-col', this.customClass()));
  labelClass = computed(() =>
    cn('font-medium text-sm mb-px text-text-1', this.invalidField && 'text-danger-500'),
  );

  get invalidField(): boolean {
    return this.sended() && this.field()().touched() && this.field()().errors().length > 0;
  }
}
