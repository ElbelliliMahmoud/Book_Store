import React from 'react'
import './CheckboxButton.css'
import { Field, ErrorMessage } from 'formik'
import Error from '../error/Error'

const CheckboxButton = ({ label, name, options, ...rest }) => {
  return (
     <div className='form-control'>
      <label htmlFor={label}>{name}</label>
      <Field name={name} {...rest}>
        {
          ({ field }) => (
            options.map((option) => (
                <span key={option.key}>
                  <input type='checkbox' id={option.value} {...field} 
                  value={option.value} 
                  checked={field.value.includes(option.value)}/>
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

export default CheckboxButton
