import React, { useState, useEffect } from 'react'
import './Home.css'
import 'swiper/css'
import "swiper/css/free-mode";
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { API_URL } from '../../api/books'
import axios from 'axios'
import { images, data } from '../../constants';
import { Button, Card, Container, Content, Heading, Review, Slider } from '../../components';
import { useAppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const [books, setBooks] = useState([]);
  const book_slice = books.slice(0, 8);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext()
  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id)
    return boolean
  }

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err))
  }, []);


  return (
    <div className='book__home'>
      <div className="book__home-description" style={{ backgroundImage: `url(${images.banner})` }}>
        <div className="book__home-description_content">
          <Content deal="deal of the day" title="upto 75% off" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!" />
          <Button children="show now" type="button" onClick={() => { }} />
        </div>
        <div className="book__home-book_slider">
          <Slider />
        </div>
      </div>
      <div className="book__home-container">
        {data.containers.map((container, index) => (
          <Container key={container.title + index} title={container.title} description={container.description} imgUrl={container.imgUrl} />
        ))}
      </div>
      <div className="book__home-featured">
        <Heading title="featured books" />
        <div className="book__home-feature">
          {book_slice.map((book, index) => (
            <div className="book__home-featured_book" key={index} >
              <Card image_url={book.image_url} title={book.title} authors={book.authors} format={book.format} rating={book.rating} onClick={()=> {navigate(`/books/${book.id}`)}}/>
              {favoritesChecker(book.id)
                ? <Button children="Remove Favorite" type="button" onClick={() => removeFromFavorites(book.id)} />
                : <Button children="Add Favorite" type="button" onClick={() => addToFavorites(book)} />
              }
            </div>
          ))}
        </div>
      </div>
      <div className="book__home-review">
        <Heading title="client's reviews" />
        <Review />
      </div>
    </div>
  )
}

export default Home
