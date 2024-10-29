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

  const products = [
    {
      name: "Python разработка - с нуля до профессионала. Python 3",
      price: "74,99$",
      img: "https://masteringjs.io/assets/images/vue/vue-spelled-out.jpg",
      author: "Юрий Гагарин",
    },
    {
      name: "Python - Полный Курс по Python, Django, Data Science",
      price: "74,99$",
      img: "https://shethink.in/wp-content/uploads/2021/07/react.js-img.png",
      author: "Юрий Гагарин",
    },
    {
      name: "Data Science и Machine Learning на Python 3 с нуля",
      price: "6859,99$",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuMxSee8-MrVmqkpTx4KWP2GWjrI3cpFx8Q&s",
      author: "Юрий Гагарин",
    },
    {
      name: "Data Science и Machine Learning на Python 3 с нуля",
      price: "69987,99$",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9k88C3M1FmsiZLG98XFG0Ldz5L2v0SdfMvaWbDr1zgOM8fy9aVKX_U55FnMVQ2ls28Hk&usqp=CAU",
      author: "Юрий Гагарин",
    },
    {
      name: "Data Science и Machine Learning на Python 3 с нуля",
      price: "829,99$",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/4e105f96750899.5eb54f337fb8e.png",
      author: "Юрий Гагарин",
    },
    {
      name: "Data Science и Machine Learning на Python 3 с нуля",
      price: "6873359,99$",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbtwUFq9ZefnkEQcdXY7IxVLYrH-V5ssEPw&s",
      author: "Юрий Гагарин",
    },
    {
      name: "Data Science и Machine Learning на Python 3 с нуля",
      price: "6873359,99$",
      img: "https://miro.medium.com/v2/resize:fit:1200/1*Uov-TfA20xfGqeIZyLWfnA.png",
      author: "Юрий Гагарин",
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
    <div>
      <div className="flex">
        {products.map((item, index) => {
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
