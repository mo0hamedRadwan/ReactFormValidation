import { Formik, Form, Field, ErrorMessage } from "formik"
import { signUpSchema } from "../../utils/schema/YupValidationSchema"
import { signUpTypes } from "../../utils/types"
import { signUp_initialValues } from "../../utils/constant"

const onSubmit = (values: signUpTypes) => {
  console.log('Result', values)
}

const SignUpComp = () => {

  return (
    <Formik
      initialValues={signUp_initialValues}
      validationSchema={signUpSchema}
      onSubmit={onSubmit}
    >
      <Form className="signUpForm" autoComplete="off">
        <h1 className="form-title">Sign Up</h1>
        <div className="form-control">
          <label htmlFor="firstNameInput">First Name</label>
          <Field 
            type="text" 
            name='firstName' 
            id='firstNameInput' 
          />
          <div className="input-error">
            <ErrorMessage name='firstName'/>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="lastNameInput">Last Name</label>
          <Field 
            type="text" 
            name='lastName' 
            id='lastNameInput' 
          />
          <div className="input-error">
            <ErrorMessage name='lastName'/>
          </div>
        </div>
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
          <label htmlFor="confirmPasswordInput">Confirm password</label>
          <Field 
            type="password" 
            name='confirmPassword' 
            id='confirmPasswordInput' 
          />
          <div className="input-error">
            <ErrorMessage name='confirmPassword'/>
          </div>
        </div>

        <div className="form-control">
          <button type="submit" className="signupBtn">Sign Up</button>
        </div>
      </Form>
    </Formik>
  )
}

export default SignUpComp
