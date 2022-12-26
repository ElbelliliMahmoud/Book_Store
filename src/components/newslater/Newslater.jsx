import React from 'react'
import './Newslater.css';
import Button from '../button/Button'

const Newslater = () => {
  return (
    <div className="book__newsletter">
      <div className="book__newsletter-heading">
        <h2 className='p__cormorant'>Newsletter</h2>
        <h2 className="headtext__cormorant">Subscribe To Our Newsletter</h2>
        <p className="p__description">And never miss latest Updates!</p>
      </div>
      <div className="book__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <Button title="Subscribe"/> 
      </div>
    </div>
  )
}

export default Newslater
