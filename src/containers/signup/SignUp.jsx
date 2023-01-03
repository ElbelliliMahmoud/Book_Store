import React from 'react'
import './SignUp.css'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Button, FormControl } from '../../components'

const SignUp = () => {
  const dropdownOptions = [
    { key: 'User', value: '' },
    { key: 'Customer', value: 'option1' },
    { key: 'Admin', value: 'option2' },
  ]
  const radioOptions = [
    { key: 'Male', value: 'rOption1' },
    { key: 'Female', value: 'rOption2' },
    { key: 'Other', value: 'rOption3' },
  ]
  const checkboxOptions = [
    { key: 'Dancing', value: 'cOption1' },
    { key: 'Singing', value: 'cOption2' },
    { key: 'Drawing', value: 'cOption3' },
  ]
  const initialValues = {
    first: '',
    last: '',
    email: '',
    password: '',
    confirmPassword: '',
    description: '',
    User: '',
    Gender: '',
    Hobbies: [],
    birthDate: null
  }
  const validationSchema = Yup.object({
    first: Yup.string().required('Required'),
    last: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    password: Yup.string()
      .required("Required")
      .min(8, "Must be 8 characters or more")
      .matches(/[a-z]+/, "One lowercase character")
      .matches(/[A-Z]+/, "One uppercase character")
      .matches(/[@$!%*#?&]+/, "One special character")
      .matches(/\d+/, "One number"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Required'),
    description: Yup.string().required('Required'),
    USer: Yup.string().required('Required'),
    Gender: Yup.string().required('Required'),
    Hobbies: Yup.array().of(Yup.string()).min(1),
    birthDate: Yup.date().required('Required').nullable()
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
        formik =>
          <Form className='form'>
            <FormControl control='input' type='text' label='First Name' name='first' />
            <FormControl control='input' type='text' label='Last Name' name='last' />
            <FormControl control='input' type='email' label='Email' name='email' />
            <FormControl control='input' type='password' label='Password' name='password' />
            <FormControl control='input' type='password' label='Confirm Password' name='confirm password' />
            <FormControl control='textarea' label='Description' name='description' />
            <FormControl control='select' label='User' name='User' options={dropdownOptions} />
            <FormControl control='radio' label='Gender' name='Gender' options={radioOptions} />
            <FormControl control='checkbox' label='Hobbies' name='Hobbies' options={checkboxOptions} />
            <FormControl control='date' label='Birthdate' name='birthDate' />
            <Button type="submit">Submit</Button>
          </Form>
      }
    </Formik>
  )
}

export default SignUp
