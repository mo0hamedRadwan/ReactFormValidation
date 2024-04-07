import { useFormik } from "formik"
import { signInSchema } from "../../utils/schema/YupValidationSchema"
import { signIn_initialValues } from "../../utils/constant"


const SignIn = () => {
  const formik = useFormik({
    initialValues: signIn_initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log('Submit:', values)
    },
    validationSchema: signInSchema,
    validateOnChange: true,
    validateOnBlur: true,
    //validateOnMount: true,
  })

  return (
    <form className="signInForm" autoComplete="off" onSubmit={formik.handleSubmit}>
      <h1 className="form-title">Sign Up</h1>
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
        <br />
        <button type="submit" className="signinBtn">Sign In</button>
      </div>
    </form>
  )
}

export default SignIn
