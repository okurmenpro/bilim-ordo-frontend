import React, { useContext } from "react";
import "./Card.css"; // Убедитесь, что здесь подключен ваш CSS
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CartContext } from "../CartContext";
import { NavLink } from "react-router-dom";

function Card() {
  const { addToCart, cartItems } = useContext(CartContext);

  const products = [
    {
      name: "Python разработка - с нуля до профессионала. Python 3",
      price: "74,99$",
      img: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/643ee30a82b8.jpg",
    },
    {
      name: "Python - Полный Курс по Python, Django, Data Science",
      price: "74,99$",
      img: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/643ee30a82b8.jpg",
    },
    {
      name: "Data Science и Machine Learning на Python 3 с нуля",
      price: "69,99$",
      img: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/643ee30a82b8.jpg",
    },
  ];

  const handleAddToCart = (item) => {
    const isAlreadyInCart = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );
    if (!isAlreadyInCart) {
      addToCart(item);
    }
  };

  return (
    <div className="carousel-container">
      {products.map((item, index) => {
        const isInCart = cartItems.some(
          (cartItem) => cartItem.name === item.name
        );
        return (
          <div key={index} className="cart">
            <NavLink to="/course">
              <img src={item.img} alt={item.name} />
              <h2 style={{ width: "200px" }}>{item.name}</h2>
              <h3>Юрий Аллахвердов</h3>
              <div className="cart-flex">
                <h2>4,3</h2>
                <div className="star-icons">
                  <MdOutlineStarPurple500 className="one-star" />
                  <MdOutlineStarPurple500 className="one-star" />
                  <MdOutlineStarPurple500 className="one-star" />
                  <MdOutlineStarPurple500 className="one-star" />
                  <MdOutlineStarPurple500 className="one-star" />
                </div>
              </div>
              <div className="cart-top">
                <p>(3 3316)</p>
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
  );
}

export default Card;
