import React from 'react'
import { Rating } from 'react-simple-star-rating'
import './Card.css';
const Card = ({imgUrl, title, new_price, old_price, rating}) => {
  return (
    <div className='book__home-card'>
      <img src={imgUrl} alt="" />
      <div className="book__home-card_description">
        <h3>{title}</h3>
        <p className='price'>{new_price} &nbsp; <span>{old_price}</span></p>
        <Rating
        iconsCount={5}
        initialValue={rating}
        fillColor={"#27AE60"}
        size={25}
        readonly={true}
        allowFraction={true}
      />
      </div>
    </div>
  )
}

export default Card
