import React, { useState, useEffect } from 'react'
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { API_URL } from '../../api/books'
import axios from 'axios'
const Slider = () => {
  const [books, setBooks] = useState([]);
  const book_slice = books.slice(0, 8);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err))
  }, []);

  return (
    <>
      <Swiper
        loop={true}
        slidesPerGroup={1}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        className='product-images-slider'
      >

        {
          book_slice.map((book, index) => (
            <SwiperSlide key={index}>
              <img src={book.image_url} alt={`image-${index}`} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default Slider
