import React from 'react'
import './Home.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { images, data } from '../../constants';
import { Button, Container, Content, Slider } from '../../components';


const Home = () => {
  return (
    <div className='book__home'>
      <div className="book__home-description" style={{ backgroundImage: `url(${images.banner})` }}>
        <div className="book__home-description_content">
          <Content deal="deal of the day" title="upto 75% off" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!" />
          <Button title="show now" />
        </div>
        <div className="book__home-book_slider">
          <Slider />
        </div>
      </div>
      <div className="book__home-container">
        {data.containers.map((container, index) => (
          <Container key={container.title + index} title={container.title}  description={container.description} imgUrl={container.imgUrl} />
        ))}
      </div>
    </div>
  )
}

export default Home
