import React from 'react'
import './Review.css'
import { data } from '../../constants';
import { Rating } from 'react-simple-star-rating'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Review = () => {
  return (
    <>
      <Swiper
        slidesPerGroup={1}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          data.reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="review__block">
                <img src={review.imgUrl} alt={`image-${index}`} />
                <h3>{review.name}</h3>
                <p>{review.description}</p>
                <p className='date'>{review.date}</p>
                <Rating
                  iconsCount={5}
                  initialValue={review.rating}
                  fillColor={"#27AE60"}
                  size={25}
                  readonly={true}
                  allowFraction={true}
                />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default Review
