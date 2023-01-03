import React from 'react'
import './Select.css'
import { Field, ErrorMessage } from 'formik'
import Error from '../error/Error'

const Select = ({label, name, options, ...rest}) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name} {...rest}>
      {options.map((option) => (
          <option key={option.value} value={option.value}>{option.key}</option>
        ))}
     </Field>
     <ErrorMessage name={name} component={Error}/>
    </div>
  )
}

export default Select
