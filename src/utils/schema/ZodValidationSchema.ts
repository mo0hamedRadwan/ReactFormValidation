import z from 'zod'

export const signUpSchema = z.object({
  firstName: z.string().min(1, {message: 'First Name is required'}),
  lastName: z.string().min(1, {message: 'Last Name is required'}),
  email: z.string().min(1, {message: 'Email is required'}).email(),
  password: z.string().min(8, {message: 'Password must at least 8 characters'}),
  confirmPassword: z.string().min(8, {message: 'Confirm Password must at least 8 characters'})
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Password do not matched',
  path: ['confirmPassword']
});

export type ISignUp = z.infer<typeof signUpSchema>


export const signInSchema = z.object({
  email: z.string().min(1, {message: 'Email is required'}).email(),
  password: z.string().min(8, {message: 'Password must at least 8 characters'}),
});

export type ISignIn = z.infer<typeof signUpSchema>