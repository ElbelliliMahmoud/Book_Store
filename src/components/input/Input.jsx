import React from 'react'
import './Input.css'
import { Field, ErrorMessage } from 'formik'
import Error from '../error/Error'

const Input = ({label, name, ...rest}) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}/>
      <ErrorMessage name={name} component={Error}/>
    </div>
  )
}

export default Input
