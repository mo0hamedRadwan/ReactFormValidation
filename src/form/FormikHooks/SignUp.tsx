import { useFormik } from "formik"
import { signUpSchema } from "../../utils/schema/YupValidationSchema"
import { signUp_initialValues } from "../../utils/constant"


const SignUp = () => {
  const formik = useFormik({
    initialValues: signUp_initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log('Submit:', values)
    },
    validationSchema: signUpSchema,
    validateOnChange: true,
    validateOnBlur: true,
    //validateOnMount: true,
  })

  return (
    <form className="signUpForm" autoComplete="off" onSubmit={formik.handleSubmit}>
      <h1 className="form-title">Sign Up</h1>
      <div className="form-control">
        <label htmlFor="firstNameInput">First Name</label>
        <input 
          type="text" 
          name='firstName' 
          id='firstNameInput' 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        <p className='input-error'>
          {(formik.touched.firstName && formik.errors.firstName)? formik.errors.firstName : null}
        </p>
      </div>
      <div className="form-control">
        <label htmlFor="lastNameInput">Last Name</label>
        <input 
          type="text" 
          name='lastName' 
          id='lastNameInput' 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        <p className='input-error'>
          {(formik.touched.lastName && formik.errors.lastName)? formik.errors.lastName : null}
        </p>
      </div>
      <div className="form-control">
        <label htmlFor="emailInput">Email</label>
        <input 
          type="text" 
          name='email' 
          id='emailInput' 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <p className='input-error'>
          {(formik.touched.email && formik.errors.email)? formik.errors.email : null}
        </p>
      </div>
      <div className="form-control">
        <label htmlFor="passwordInput">Password</label>
        <input 
          type="password" 
          name='password' 
          id='passwordInput'
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <p className='input-error'>
          {(formik.touched.password && formik.errors.password)? formik.errors.password : null}
        </p>
      </div>
      <div className="form-control">
        <label htmlFor="confirmPasswordInput">Confirm password</label>
        <input 
          type="password" 
          name='confirmPassword' 
          id='confirmPasswordInput' 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />
        <p className='input-error'>
          {(formik.touched.confirmPassword && formik.errors.confirmPassword)? formik.errors.confirmPassword : null}
        </p>
      </div>

      <div className="form-control">
        <br />
        <button type="submit" className="signupBtn">Sign Up</button>
      </div>
    </form>
  )
}

export default SignUp
