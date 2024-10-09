import {Carousel} from 'react-bootstrap';


function Slider() {
  return (
    <Carousel className='banner-container container'> 
      <Carousel.Item className='banner-in'>
        <img src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg" alt="" />
        <Carousel.Caption>
          <h3>First Okurmen Project </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='banner-in'>
      <img src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second Okurmen Project </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


  );
}

export default Slider;
