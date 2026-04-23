import { IControl } from '@/app/shared/types/IControl';
import z from 'zod';

export const loginSchema = z.object({
  email: z.email({
    error: 'Login.form.fields.email.errors.required',
  }),
  password: z.string().min(6, {
    error: 'Login.form.fields.password.errors.required',
  }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const loginControls: IControl<keyof LoginSchema>[] = [
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
