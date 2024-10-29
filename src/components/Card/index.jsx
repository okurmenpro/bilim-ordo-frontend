import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CartContext } from "../CartContext";
import { NavLink } from "react-router-dom";
import { course } from "../../data/Card";

function Card() {
  const { addToCart, cartItems } = useContext(CartContext);
  const [cardCourse, setCourse] = useState(course);

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
      (cartItem) => cartItem.name === item.name
    );
    if (!isAlreadyInCart) {
      addToCart(item);
    }
  };

  return (
    <div>
      <div className="flex">
        {cardCourse.map((item, index) => {
          const isInCart = cartItems.some(
            (cartItem) => cartItem.name === item.name
          );
          return (
            
            <div key={index} className="cart">
              <NavLink to="/course">
                <img src={item.img} alt={item.name} />
                <h2>{item.name}</h2>
                <h3>{item.author}</h3>
                <div className="cart-flex">
                  <h2>4,3</h2>  
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <p>(3 3316)</p>
                </div>
                <div className="cart-top">
                  <p>{item.price}</p>
                </div>
              </NavLink>
              <button
                onClick={() => handleAddToCart(item)}
                className="add-to-cart-button"
                disabled={isInCart}
              >
                {isInCart ? "В корзине" : "Добавить в корзину"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
