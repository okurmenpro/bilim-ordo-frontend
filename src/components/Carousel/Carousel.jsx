import React from "react";
import { Carousel } from "antd";
import { CarouselUrl } from "../../data/Carousel";

import "./Carousel.scss";

function CarouselData() {
  return (
    <div className="wrapper">
      <Carousel autoplay>
        {CarouselUrl.map((item) => (
          <div key={item.id} className="carousel">
            <img src={item.image} alt="" />

            <div className="carousel__title">
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselData;
