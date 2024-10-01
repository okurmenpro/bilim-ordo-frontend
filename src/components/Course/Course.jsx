import React from "react";
import star from "../../assets/svg/star.svg";

import "./Course.scss";

function Course({ image, name, text, avtor, month, price }) {
  return (
    <div className="course">
      <div className="wrapper">
        <div className="course__content">
          <img src={image} alt="photo to video to kurs" />

          <div className="course__text">
            <h1>{name}</h1>

            <p>{text}</p>

            <h3>{avtor}</h3>
            <p></p>

            <h3>{month}</h3>

            <div className="course__star">
              <h4>4,7</h4>
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <h5>(15)</h5>
            </div>

            <h1 className="crouse__price">{price} $</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
