import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import SignUpModal from "../SignUpModal";
import "./Basket.scss";
import { FaStar } from "react-icons/fa6";

function AddCart() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const navigate = useNavigate();

  // Проверка, был ли пользователь зарегистрирован при монтировании компонента
  useEffect(() => {
    const registered = localStorage.getItem("isUserRegistered");
    if (registered === "true") {
      setIsUserRegistered(true);
    }

    if (cartItems.length === 0) {
      navigate("/basket");
    }
  }, [cartItems, navigate]);
  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        if (item?.price && typeof item.price === "string") {
          const price = parseFloat(
            item.price.replace("$", "").replace(",", ".")
          );
          return total + (isNaN(price) ? 0 : price);
        }
        console.warn("Invalid item in cart:", item);
        return total;
      }, 0)
      .toFixed(2);
  };

  // Обработчик оформления заказа
  const handleOrder = () => {
    const registered = localStorage.getItem("isUserRegistered");
    if (registered !== "true" && !isModalOpen) {
      setIsModalOpen(true); // Открываем модал, если пользователь не зарегистрирован
    } else {
      console.log("Оформление заказа...");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="v1">
        <h1 className="cart1">Shopping Cart</h1>
        <h5 className="cart2">0 Course in cart</h5>
        <div className="v2">
          <img
            src="https://business.udemy.com/wp-content/uploads/2022/01/Empty_Cart_Spot@2x.png"
            alt="Пустая корзина"
          />
          <p className="cart3">
            Your cart is empty. Keep shopping to find a course!
          </p>
          <a href="/">
            <button className="cart4">Keep shopping</button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="addCart">
      <div className="leftCart">
        <h1>Shopping Cart</h1>
        <p className="countPro">{cartItems.length} Course in cart</p>
        <hr />
        <div className="aboutCarts">
          {cartItems.map((item, index) => (
            <div className="aboutCart" key={index}>
              <img src={item.img} alt={item.name} />
              <div className="description">
                <h4>{item.name}</h4>
                <p>By {item.author}</p>
                <div className="stars">
                  <span>4.6</span>
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <p>(250 rating)</p>
                </div>
                <div className="btns">
                  {/* <button className="save-button">Save for later</button> */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="price">
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cartOrder">
        <div className="order-details">
          <h3>Order Details</h3>
          <div className="details-text">
            <div className="top">
              <div className="left">
                <p>Price</p>
                <p>Discount</p>
                <p>Tax</p>
              </div>
              <div className="right">
                <p>${calculateTotalPrice()}</p>
                <p>-$0.00</p>
                <p>$0.00</p>
              </div>
            </div>
            <hr />
            <div className="end">
              <h6>Total</h6>
              <h5>${calculateTotalPrice()}</h5>
            </div>
          </div>
        </div>
        <button onClick={handleOrder}>Proceed to Checkout</button>
      </div>

      {isModalOpen && <SignUpModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}

export default AddCart;
