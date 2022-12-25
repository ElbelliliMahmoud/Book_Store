import React from 'react'
import './Heading.css'

const Heading = ({ title }) => {
  return (
    <h2 className='book__home-heading'>
      <span>{title}</span>
    </h2>
  )
}

export default Heading
