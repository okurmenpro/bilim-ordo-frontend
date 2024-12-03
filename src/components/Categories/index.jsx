import React from "react";
import "./Categories.scss";
import astrology from "../../assets/svg/astrology.svg";
import astrology1 from "../../assets/svg/astrology1.svg";
import astrology2 from "../../assets/svg/astrology2.svg";
import astrology3 from "../../assets/svg/astrology3.svg";

function index() {
  return (
    <div className="categories container">
      <div className="astrology ">
        <div className="astrology-cours">
          <img src={astrology} alt="" />
          <span className="span">Astrology</span>
          <span className="span1">11 Courses</span>
        </div>
        <div className="astrology-cours">
          <img src={astrology1} alt="" />
          <span className="span">Astrology</span>
          <span className="span1">11 Courses</span>
        </div>
        <div className="astrology-cours">
          <img src={astrology2} alt="" />
          <span className="span">Astrology</span>
          <span className="span1">11 Courses</span>
        </div>
        <div className="astrology-cours">
          <img src={astrology3} alt="" />
          <span className="span">Astrology</span>
          <span className="span1">11 Courses</span>
        </div>
      </div>
    </div>
  );
}

export default index;
