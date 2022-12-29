import React from 'react'
import './Contact.css'
import { images } from '../../constants'
import { Heading, Button } from '../../components'

const Contact = () => {
  return (
   <div className="book__contact">
           <Heading title=" Contact Us"/>
           <div className="book__contact-block">
             <div
        className="book__contact-leftSide"
        style={{ backgroundImage: `url(${images.background})` }}
      ></div>
      <div className="book__contact-rightSide">
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <Button className='submit' children="Send Message"  type="submit" onClick={() => {}}/>
        </form>
      </div>
           </div>
    </div>
  )
}

export default Contact
