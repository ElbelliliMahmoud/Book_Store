import React from 'react'
import './ScrollTop.css'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const ScrollTop = () => {
    const top = ()=> {
    window.scrollTo(0,0);
  }
  return (
    <div className='book__scroll-top' onClick={top}>
      <BsFillArrowUpCircleFill/>
    </div>
  )
}

export default ScrollTop
