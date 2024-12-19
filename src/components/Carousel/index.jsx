import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import slides from "./Carousel.json";
import "./Carousel.scss";

function Slider() {
  const [data, setData] = useState(slides);
  return (
    <Carousel className="banner-container">
      {data.map((slide, index) => (
        <Carousel.Item key={index} className="banner-in">
          <div className="in-all">
            <div className="banner-text">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <button>Start your instructor journey</button>
            </div>
            <img src={slide.img} alt="" />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
