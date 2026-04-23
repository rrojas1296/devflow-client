import { Button } from '@/app/shared/components/button/button';
import { GoogleIcon } from '@/app/shared/components/icons/google.icon';
import { Component, signal } from '@angular/core';
import { form, validateStandardSchema } from '@angular/forms/signals';
import { TranslocoDirective } from '@jsverse/transloco';
import { loginControls, LoginSchema, loginSchema } from '../../schemas/login.schema';
import { LogoIcon } from '@/app/shared/components/icons/logoIcon/LogoIcon';
import { RouterLink } from '@angular/router';
import { FormControl } from '@/app/shared/components/formField/formControl';
import { LucideEye, LucideMail, LucideEyeOff } from '@lucide/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [
    TranslocoDirective,
    Button,
    GoogleIcon,
    LogoIcon,
    RouterLink,
    FormControl,
    LucideMail,
    LucideEye,
    LucideEyeOff,
  ],
  styleUrl: './login.css',
})
export class Login {
  controls = loginControls;

  sended = signal(false);
  showPassword = signal(false);

  formModel = signal({
    email: '',
    password: '',
  });

  loginForm = form(this.formModel, (schemaPath) => {
    validateStandardSchema(schemaPath, loginSchema);
  });

  submitData(event: Event) {
    event.preventDefault();

    if (!this.sended()) this.sended.set(true);

    Object.keys(this.loginForm().value()).forEach((key) => {
      this.loginForm[key as keyof LoginSchema]().markAsTouched();
    });
    if (!this.loginForm().valid()) return;
  }
}
