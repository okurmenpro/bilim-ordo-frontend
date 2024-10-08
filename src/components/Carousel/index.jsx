import { Carousel } from 'react-bootstrap';

function Slider() {
  return (
    <Carousel className='banner-container container'> 
      <Carousel.Item className='banner-in'>
        <img src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg" alt="" />
        <Carousel.Caption>
          <h3>First Okurmen Project </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='banner-in'>
        <img src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/10ca89f6-811b-400e-983b-32c5cd76725a.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second Okurmen Project </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='banner-in'>
        <img src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/4fa08229-f486-43c4-8fa8-eb10bb997a6a.png" alt="" />

        <Carousel.Caption>
          <h3>Third Okurmen Project </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;