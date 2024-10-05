import {Carousel} from 'react-bootstrap';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Slider() {
  return (
    <Carousel className='banner-container container'> 
      <Carousel.Item className='banner-in'>
        <img src="https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200" alt="" />
        <Carousel.Caption>
          <h3>First Okurmen Project </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='banner-in'>
      <img src="https://thewellesleynews.com/wp-content/uploads/2020/09/avatar.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second Okurmen Project </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='banner-in'>
      <img src="https://occ-0-8407-444.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABckCwveUhZ8bQlePrL3JSapVKuToldR2XBELqkHiN8k7q7XGdNXumpHjHGTJY8amruVng9aEa3tgxjPrgBsuq_mdIbNe606HD4Bk.jpg?r=a25" alt="" />

        <Carousel.Caption>
          <h3>Third Okurmen Project </h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;