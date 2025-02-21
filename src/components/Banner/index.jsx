import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import slides from "./Carousel.json";
import "./Carousel.scss";
import { NavLink } from "react-router-dom";

function Banner() {
  const [data, setData] = useState(slides);
  return (
    <Carousel className="banner container">
      {data.map((slide, index) => (
        <Carousel.Item key={index} className="banner-in">
          <div className="in-all">
            <div className="banner-text">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <NavLink to={"/teaching"}>
                <button>Start your instructor journey</button>
              </NavLink>
            </div>
            <div className="banner-img">
              <img src={slide.img} alt="" />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
