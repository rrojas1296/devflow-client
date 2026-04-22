import { NgClass } from '@angular/common';
import { Component, computed, effect, input } from '@angular/core';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const buttonStyles = cva(
  'h-10 rounded-lg gap-3 text-sm flex justify-center items-center outline-none cursor-pointer px-3 transition-colors',
  {
    variants: {
      variant: {
        filled: 'bg-primary-500 text-text-3 hover:bg-primary-300',
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
  customClass = input<string>('');
  variant = input<'filled' | 'secondary' | 'outlined'>('filled');
  type = input<HTMLButtonElement['type']>('button');

  classes = computed(() =>
    cn(
      buttonStyles({
        variant: this.variant(),
      }),
      this.customClass(),
    ),
  );
}
