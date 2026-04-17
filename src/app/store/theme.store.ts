import { effect, Injectable, signal } from '@angular/core';

export type ITheme = 'dark' | 'light';

export const THEME_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeStore {
  theme = signal<ITheme>('light');

  constructor() {
    console.log('THEME');
    const localTheme = localStorage.getItem(THEME_KEY) as ITheme | undefined;
    if (localTheme) {
      this.theme.set(localTheme);
    } else {
      const OSTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      this.theme.set(OSTheme);
    }
    effect(() => {
      const current = this.theme();
      localStorage.setItem(THEME_KEY, current);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(current);
    });
  }

  setTheme(theme: ITheme) {
    this.theme.set(theme);
  }
}
