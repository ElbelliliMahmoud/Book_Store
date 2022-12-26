import React from 'react'
import './Footer.css'
import Newslater from '../newslater/Newslater';
import { FiFacebook, FiLinkedin, FiGithub } from 'react-icons/fi'


const Footer = () => {
  return (
    <div className="book__footer">
      <Newslater />
      <div className="book__footer-links">
        <div className="book__footer-links_contact">
          <h2 className="book__footer-headtext">Contact Us</h2>
          <p className="p__description">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__description">+1 212-344-1230</p>
          <p className="p__description">+1 212-555-1230</p>
        </div>

        <div className="book__footer-links_logo">
          <p className="p__description">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
          <div className="book__footer-links_icons">
            <a href="https://www.facebook.com/mahmoud.elbellili" target="_blanc"><FiFacebook /></a>
            <a href="https://www.linkedin.com/in/mahmoudelbellili/" target="_blanc"><FiLinkedin /></a>
            <a href="https://github.com/ElbelliliMahmoud/" target="_blanc"><FiGithub /></a>
          </div>
        </div>

        <div className="book__footer-links_work">
          <h2 className="book__footer-headtext">Working Hours</h2>
          <p className="p__description">Monday-Friday:</p>
          <p className="p__description">08:00 am - 12:00 am</p>
          <p className="p__description">Saturday-Sunday:</p>
          <p className="p__description">07:00 am - 11:00 pm</p>
        </div>
      </div>
      <p className="book__footer-copyright">&copy; 2022 Bookly. All rights reserved.</p>
    </div>
  )
}

export default Footer