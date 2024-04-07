import { SubmitHandler, useForm } from 'react-hook-form'
import { ISignIn, signInSchema } from '../../utils/schema/ZodValidationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import LoginButton from '../../auth/components/LoginButton';


const onSubmit: SubmitHandler<ISignIn> = (values) => {
  console.log(values);
}

const SignInForm = () => {
  const { 
    register, 
    handleSubmit,
    formState: {errors, isSubmitted}
  } = useForm<ISignIn>({
      mode: 'onChange',
      resolver: zodResolver(signInSchema),
    })

  return (
    <div>
      <form className="signInForm" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-title">Sign In</h1>
        <div className="form-control">
          <label htmlFor="emailInput">Email</label>
          <input 
            type="text" 
            id='emailInput' 
            //name='email'
            {...register('email')}
          />
          <div className="input-error">
            {errors.email?.message}
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="passwordInput">Password</label>
          <input 
            type="password" 
            id='passwordInput'
            //name='password' 
            {...register('password')}
          />
          <div className="input-error">
            {errors.password?.message}
          </div>
        </div>

        <div className="form-control">
          <button type="submit" className="signinBtn" disabled={isSubmitted}>Sign In</button>
        </div>
        <div className="form-control">
          <LoginButton />
        </div>
      </form>
    </div>
  )
}

export default SignInForm
