import { Button } from '@/app/shared/components/button/button';
import { GoogleIcon } from '@/app/shared/components/icons/google.icon';
import { IControl } from '@/app/shared/types/IControl';
import { Component, signal } from '@angular/core';
import { form, validateStandardSchema, FormField } from '@angular/forms/signals';
import { TranslocoDirective } from '@jsverse/transloco';
import { LoginSchema, loginSchema } from '../../schemas/login.schema';
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
  controls: IControl<keyof LoginSchema>[] = [
    {
      name: 'email',
      label: 'Login.form.fields.email.label',
      placeholder: 'Login.form.fields.email.placeholder',
      type: 'email',
    },
    {
      name: 'password',
      label: 'Login.form.fields.password.label',
      placeholder: 'Login.form.fields.password.placeholder',
      type: 'password',
    },
  ];
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

    Object.keys(this.loginForm().value()).forEach((key) => {
      this.loginForm[key as keyof LoginSchema]().markAsTouched();
    });
    if (!this.loginForm().valid()) return;
    console.log({
      data: this.loginForm().value(),
    });
  }
}
