import React from 'react'
import './SignIn.css'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button, FormControl } from '../../components'
import { Link } from 'react-router-dom'

const SignIn = () => {

  const initialValues = {
    email: '',
    password: ''
  }
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  })
  const onSubmit = (values, onSubmitProps) => {
    console.log('Form data', values)
    onSubmitProps.resetForm()
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {
        formik => <Form className='form'>
            <FormControl control='input' type='email' label='Email' name='email' />
            <FormControl control='input' type='password' label='Password' name='password' />
            <Button type="submit" disabled={!formik.isValid}>Submit</Button>
             <span>Don't have an account? <Link to='/signup'>Sign Up</Link></span>
            </Form>
      }
    </Formik>
  )
}

export default SignIn
