import React from 'react'
import './Container.css'


const Container = ( { imgUrl, title, description }) => {

  return (
    <div className='container__description'>
         <div className="block_image">
           <img src={imgUrl} alt={`${title}`} />
         </div>
      <div className="block__description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Container
