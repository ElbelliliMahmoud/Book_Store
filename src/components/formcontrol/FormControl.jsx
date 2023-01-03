import React from 'react'
import CheckboxButton from '../checkboxbutton/CheckboxButton'
import Date from '../datepicker/Date'
import Input from '../input/Input'
import RadioButton from '../radiobutton/RadioButton'
import Select from '../select/Select'
import Textarea from '../textarea/Textarea'
import './FormControl.css'

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input': return <Input {...rest}/>
    case 'textarea': return <Textarea {...rest}/>
    case 'select': return <Select {...rest}/>
    case 'radio': return <RadioButton {...rest} />
    case 'checkbox': return <CheckboxButton {...rest}/>
    case 'date': return <Date {...rest}/>
    default: return null
  }
}

export default FormControl
