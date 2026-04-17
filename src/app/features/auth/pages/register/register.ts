import { Component } from '@angular/core';
import { TranslocoService, TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-register',
  imports: [TranslocoDirective],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(private i18n: TranslocoService) {}

  changeLanguage(lang: string) {
    this.i18n.setActiveLang(lang);
  }
}
