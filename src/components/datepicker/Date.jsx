import React from 'react'
import './Date.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from 'formik'
import Error from '../error/Error'

const Date = ({ label, name, ...rest }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
            const { setFieldValue } = form
            const { value } = field
            return (
              <DatePicker id={name} {...field}
              {...rest} selected={value}
              onChange={val => setFieldValue(name, val)} />
            )}}
      </Field>
      <ErrorMessage name={name} component={Error}/>
    </div>
  )
}

export default Date
