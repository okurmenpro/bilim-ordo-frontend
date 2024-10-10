import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slides from './Carousel.json'; 

function Slider() {
  const [data, setData] = useState(slides); 
  return (
    <Carousel className='banner-container container'>
      {data.map((slide, index) => (
        <Carousel.Item key={index} className='banner-in'>
          <img src={slide.imgSrc} alt={slide.title} />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
