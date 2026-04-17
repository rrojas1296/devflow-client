import { NgClass } from '@angular/common';
import { Component, computed, effect, Input, input } from '@angular/core';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cv';

const buttonStyles = cva(
  'h-10 rounded-lg flex justify-center items-center outline-none cursor-pointer px-3 transition-colors',
  {
    variants: {
      variant: {
        filled: 'bg-primary-500 text-text-3',
        secondary: '',
        outlined: 'border border-border-1 text-text-1 hover:bg-bg-2',
      },
    },
  },
);

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() customClass: string = '';
  @Input() variant: 'filled' | 'secondary' | 'outlined' = 'filled';

  get classes() {
    return cn(
      buttonStyles({
        variant: this.variant,
      }),
      this.customClass,
    );
  }
}
