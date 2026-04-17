import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-login',
  imports: [TranslocoDirective],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  title = 'Login Page';
}
