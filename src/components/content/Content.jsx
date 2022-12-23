import React from 'react'
import './Content.css'

const Content = ({deal,title,description}) => {
  return (
    <div className='book__content'>
       <h4>{deal}</h4>
       <h2>{title}</h2>
       <p>{description}</p>
    </div>
  )
}

export default Content
