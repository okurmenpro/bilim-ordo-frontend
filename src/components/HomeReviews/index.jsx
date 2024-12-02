import "./HomeReviews.scss";
import { HomeReviewsData } from "../../data/HomeReviews";
import React, { useRef } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { ImQuotesLeft } from "react-icons/im";  

const HomeReviews = () => {
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
    <div className="homeReviews">
      <div className="reviews-hero">
        <h2>What Our Customer Say <br /> About Us</h2>
        <div className="btns">
          <button className="reviews-scroll-button left" onClick={scrollLeft}>
            <MdOutlineArrowBackIos className="scroll-icon" />
          </button>
          <button className="reviews-scroll-button right" onClick={scrollRight}>
            <MdOutlineArrowForwardIos className="scroll-icon" />
          </button>
        </div>
      </div>
      <div className="reviews-carts-wrapper" ref={scrollRef}>
        <div className="reviews-carts" >
          {HomeReviewsData.map((el, index) => (
            <div className="reviews-cart" key={index}>
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

export default HomeReviews;