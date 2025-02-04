import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Card.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import { course } from "../../data/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

function Card() {
  const { cartItems } = useContext(CartContext);
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
    <div className="card-container container">
      <div className="card">
        <div className="flex99" ref={scrollRef}>
          <button onClick={scrollLeft} className="scroll-button3 left8">
            <IoIosArrowDropleftCircle size={30} />
          </button>
          {cardCourse.map((item, index) => {
            return (
              <div key={index} className="cart">
                <NavLink to="/mentor">
                  <img src={item.img} alt={item.name} />
                  <h2>{truncateText(item.name, 30)}</h2>
                  <h3>{item.author}</h3>
                  <div className="cart-flex">
                    <div className="card-iconp">
                      <MdOutlineStarPurple500 />
                      <span>4,3</span>
                    </div>
                    <p>(3 3316)</p>
                  </div>
                  <div className="cart-top">
                    <p>{item.price}</p>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
        <button onClick={scrollRight} className="scroll-button3 right8">
          <IoIosArrowDroprightCircle size={30} />
        </button>
      </div>
    </div>
  );
}

export default Card;
