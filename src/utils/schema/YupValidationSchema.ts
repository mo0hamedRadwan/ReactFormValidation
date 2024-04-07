import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  firstName: Yup.string().required('Enter first name'),
  lastName: Yup.string().required('Enter last name'),
  email: Yup.string().required('Enter email').email('Enter a valid email'),
  password: Yup.string().required('Enter password')
    .min(8, 'Password must have at least 8 characters'),
  confirmPassword: Yup.string().required('Enter confirm password')
    .oneOf([Yup.ref('password')] , "Password must match"),
})


export const signInSchema = Yup.object({
  email: Yup.string().required('Enter email').email('Enter a valid email'),
  password: Yup.string().required('Enter password')
    .min(8, 'Password must have at least 8 characters'),
})