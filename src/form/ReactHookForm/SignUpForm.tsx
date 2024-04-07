import { SubmitHandler, useForm } from 'react-hook-form'
import { ISignUp, signUpSchema } from '../../utils/schema/ZodValidationSchema'
import { zodResolver } from '@hookform/resolvers/zod'


const onSubmit: SubmitHandler<ISignUp> = (values) => {
  console.log(values);
}

const SignUpForm = () => {
  const { 
    register, 
    handleSubmit,
    formState: {errors, isSubmitted}
  } = useForm<ISignUp>({
      mode: 'onChange',
      resolver: zodResolver(signUpSchema),
    })

  return (
    <div>
      <form className="signUpForm" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-title">Sign Up</h1>
        <div className="form-control">
          <label htmlFor="firstNameInput">First Name</label>
          <input 
            type="text" 
            id='firstNameInput' 
            //name='firstName' 
            {...register('firstName')}
          />
          <div className="input-error">
            {errors.firstName?.message}
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="lastNameInput">Last Name</label>
          <input 
            type="text" 
            id='lastNameInput' 
            //name='lastName'
            {...register('lastName')}
          />
          <div className="input-error">
            {errors.lastName?.message}
          </div>
        </div>
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
          <label htmlFor="confirmPasswordInput">Confirm password</label>
          <input 
            type="password" 
            id='confirmPasswordInput' 
            //name='confirmPassword'
            {...register('confirmPassword')}
          />
          <div className="input-error">
            {errors.confirmPassword?.message}
          </div>
        </div>

        <div className="form-control">
          <button type="submit" className="signupBtn" disabled={isSubmitted}>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
