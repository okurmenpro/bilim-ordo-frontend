import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Card.css";
import { IoStarSharp } from "react-icons/io5";
import { CartContext } from "../CartContext";
import { NavLink } from "react-router-dom";
import { course } from "../../data/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
function Card() {
  const { addToCart, cartItems } = useContext(CartContext);
  const [cardCourse, setCourse] = useState(course);
  const scrollRef = useRef(null);
  const getcourse = async () => {
    try {
      const response = await axios.get("/course");
      setCourse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getcourse();
  }, []);

  const handleAddToCart = (item) => {
    const isAlreadyInCart = cartItems.find(
      (cartItem) => cartItem.id === item.id
      // (cartItem) => cartItem.name === item.name
    );
    if (!isAlreadyInCart) {
      addToCart(item);
    }
  };

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
  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };
  return (
    <div className="card-container">
      <div className="card">
        <div className="flex" ref={scrollRef}>
          <button onClick={scrollLeft} className="scroll-button left">
            <IoIosArrowDropleftCircle size={30} />
          </button>
          {cardCourse.map((item, index) => {
            const isInCart = cartItems.some(
              (cartItem) => cartItem.id === item.id
            );
            return (
              <div key={index} className="cart">
                <NavLink to="/course">
                  <img src={item.img} alt={item.name} />
                  <h2>{truncateText(item.name)}</h2>
                  <h3>{item.author}</h3>
                  <div className="widht-left"></div>
                  <div className="cart-flex">
                    <div className="cart-star">
                      <IoStarSharp />
                      <span>4.9</span>
                    </div>
                    <p>2400 Students</p>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
        <button onClick={scrollRight} className="scroll-button right">
          <IoIosArrowDroprightCircle size={30} />
        </button>
      </div>
    </div>
  );
}

export default Card;
