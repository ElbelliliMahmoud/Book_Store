import React from 'react'
import './RadioButton.css'
import { Field, ErrorMessage } from 'formik'
import Error from '../error/Error'


const RadioButton = ({ label, name, options, ...rest }) => {
  return (
    <div className='form-control'>
      <label htmlFor={label}>{name}</label>
      <Field name={name} {...rest}>
        {
          ({ field }) => (
            options.map((option) => (
                <span key={option.key}>
                  <input type='radio' id={option.value} {...field} 
                  value={option.value} 
                  checked={field.value === option.value}/>
                  <label htmlFor={option.value}>{option.key}</label>
                </span>
            ))
          )
        }
      </Field>
      <ErrorMessage name={name} component={Error}/>
    </div>
  )
}

export default RadioButton
