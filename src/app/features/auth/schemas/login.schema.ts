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
