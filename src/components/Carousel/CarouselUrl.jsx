import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselData } from "../../data/Carousel";
import "./CarouselUrl.scss";

function CarouselUrl() {
  return (
    <div className="wrapper">
      <Carousel>
        {CarouselData.map((item) => (
          <Carousel.Item>
            <div key={item.id} className="carousel">
              <img
                src={item.image}
                alt="photo carousel to slide"
                className="carousel__image"
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselUrl;
