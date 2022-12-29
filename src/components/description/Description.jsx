import React, { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import './Description.css'


const Description = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
          <>
            <div className="book__about-info_title" onClick={() => setShowInfo(!showInfo)}>
              <h3>{title}</h3>
              <span> {showInfo ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}</span>
            </div>
            {showInfo ? <p>{info}</p> : null}
          </>

  )
}

export default Description
