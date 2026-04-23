import { Component, inject, signal } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { registerControls, RegisterSchema, registerSchema } from '../../schemas/register.schema';
import { FormControl } from '@/app/shared/components/formField/formControl';
import { GoogleIcon } from '@/app/shared/components/icons/google.icon';
import { Button } from '@/app/shared/components/button/button';
import { LogoIcon } from '@/app/shared/components/icons/logoIcon/LogoIcon';
import { form, validateStandardSchema } from '@angular/forms/signals';
import { LucideEye, LucideEyeOff, LucideMail } from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [
    TranslocoDirective,
    FormControl,
    GoogleIcon,
    Button,
    LogoIcon,
    LucideMail,
    LucideEye,
    LucideEyeOff,
    RouterLink,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private authService = inject(AuthService);
  controls = registerControls;
  sended = signal(false);

  registerModel = signal({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  showPassword = signal(false);

  registerForm = form(this.registerModel, (schemaPath) => {
    validateStandardSchema(schemaPath, registerSchema);
  });

  async submitData(event: Event) {
    event.preventDefault();
    if (!this.sended()) this.sended.set(true);

    Object.keys(this.registerForm().value()).forEach((key) => {
      this.registerForm[key as keyof RegisterSchema]().markAsTouched();
    });

    if (!this.registerForm().valid()) return;
    const u = await this.authService.registerUser(this.registerForm().value());
    console.log({
      d: u,
    });
  }
}
