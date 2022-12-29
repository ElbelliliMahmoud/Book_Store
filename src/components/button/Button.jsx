import React from 'react'
import './Button.css'

const Button = ({ children, type, className, id, onClick }) => {
  return (
    <button
      type={type ? type : "button"}
      className={className ? `book__show-now ${className}` : "book__show-now"}
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
