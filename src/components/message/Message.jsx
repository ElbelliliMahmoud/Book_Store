import React from 'react'
import './Message.css'

const Message = ({message}) => {
  return (
    <div className='book__message'>
      <h2 className='book__message-text'>{message}</h2>
    </div>
  )
}

export default Message
