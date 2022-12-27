import React from 'react'
import { Rating } from 'react-simple-star-rating'
import './Card.css';
const Card = ({ image_url, title, authors, format, rating }) => {
  return (
    <div className='book__home-card'>
      <img src={image_url} alt="" />
      <div className="book__home-card_description">
        <h3>{title}</h3>
        <p>{authors}</p>
        <p >{format}</p>
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
