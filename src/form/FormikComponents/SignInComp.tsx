import { Formik, Form, Field, ErrorMessage } from "formik"
import { signInSchema } from "../../utils/schema/YupValidationSchema"
import { signInTypes } from "../../utils/types"
import { signIn_initialValues } from "../../utils/constant"

const onSubmit = (values: signInTypes) => {
  console.log('Result', values)
}

const SignInComp = () => {

  return (
    <Formik
      initialValues={signIn_initialValues}
      validationSchema={signInSchema}
      onSubmit={onSubmit}
    >
      <Form className="signInForm" autoComplete="off">
        <h1 className="form-title">Sign In</h1>
        <div className="form-control">
          <label htmlFor="emailInput">Email</label>
          <Field 
            type="text" 
            name='email' 
            id='emailInput' 
          />
          <div className="input-error">
            <ErrorMessage name='email'/>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="passwordInput">Password</label>
          <Field 
            type="password" 
            name='password' 
            id='passwordInput'
          />
          <div className="input-error">
            <ErrorMessage name='password'/>
          </div>
        </div>

        <div className="form-control">
          <button type="submit" className="signinBtn">Sign Up</button>
        </div>
      </Form>
    </Formik>
  )
}

export default SignInComp
