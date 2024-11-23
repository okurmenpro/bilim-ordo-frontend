import "./TeacherSection.scss";
import teach from "../../assets/images/teach.png";
import teach1 from "../../assets/images/teach1.png";
import teach2 from "../../assets/images/teach2.png";
import teach3 from "../../assets/images/teach3.png";
import { TeacherSeactionData } from "../../data/teacherSection";
import React, { useRef } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { ImQuotesLeft } from "react-icons/im";

const TeacherSection = () => {
  const scrollRef = useRef(null);
  
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="teachSection">
      <div className="teacher-hero">
        <h2>What Our Customer Say <br /> About Us</h2>
        <div className="btns">
          <button className="teacher-scroll-button left" onClick={scrollLeft}>
            <MdOutlineArrowBackIos className="scroll-icon" />
          </button>
          <button className="teacher-scroll-button right" onClick={scrollRight}>
            <MdOutlineArrowForwardIos className="scroll-icon" />
          </button>
        </div>
      </div>
      <div className="teacher-carts-wrapper" ref={scrollRef}>
        <div className="teacher-carts" >
          {TeacherSeactionData.map((el, index) => (
            <div className="teacher-cart" key={index}>
              <ImQuotesLeft className="quotes" />
              <p>{el.text}</p>
              <div className="cart-end">
                <img src={el.img} alt={el.name} />
                <div className="end-text">
                  <h5>{el.name}</h5>
                  <h6>{el.work}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherSection;
