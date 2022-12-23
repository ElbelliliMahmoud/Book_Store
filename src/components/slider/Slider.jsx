import React, { useState } from 'react'
import './Slider.css';
import {data} from '../../constants'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'

const Slider = () => {
  const [activeThumb, setActiveThumb] = useState()
  return(
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        Thumbs={{ swiper: activeThumb }}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        className='product-images-slider'
      > 

        {
          data.books.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img.imgUrl} alt={`image-${index}`} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className='product-images-slider-thumbs'
      >
        {
          data.books.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="product-images-slider-thumbs-wrapper">
                <img src={img.imgUrl} alt={`image-${index}`} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default Slider
