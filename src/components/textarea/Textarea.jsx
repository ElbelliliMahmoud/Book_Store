import React from 'react'
import './Textarea.css'
import { Field, ErrorMessage } from 'formik'
import Error from '../error/Error'

const Textarea = ({label, name, ...rest}) => {
  return (
      <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as='textarea' id={name} name={name} {...rest}/>
      <ErrorMessage name={name} component={Error}/>
    </div>
  )
}

export default Textarea
