import { IControl } from '@/app/shared/types/IControl';
import z from 'zod';

export const registerSchema = z.object({
  firstName: z.string().min(2, {
    error: 'Register.form.fields.firstName.errors.required',
  }),
  lastName: z.string().min(2, {
    error: 'Register.form.fields.lastName.errors.required',
  }),
  email: z.email({
    error: 'Register.form.fields.email.errors.required',
  }),
  password: z.string().min(6, {
    error: 'Register.form.fields.password.errors.min',
  }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export const registerControls: IControl<keyof RegisterSchema>[] = [
  {
    name: 'firstName',
    label: 'Register.form.fields.firstName.label',
    placeholder: 'Register.form.fields.firstName.placeholder',
    type: 'text',
  },
  {
    name: 'lastName',
    label: 'Register.form.fields.lastName.label',
    placeholder: 'Register.form.fields.lastName.placeholder',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Register.form.fields.email.label',
    placeholder: 'Register.form.fields.email.placeholder',
    type: 'email',
    className: 'col-span-2',
  },
  {
    name: 'password',
    label: 'Register.form.fields.password.label',
    placeholder: 'Register.form.fields.password.placeholder',
    type: 'password',
    className: 'col-span-2',
  },
];
