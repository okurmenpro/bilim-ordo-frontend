import React, { useState } from "react";
import "./Checkout.scss";
import { FaChevronRight } from "react-icons/fa6";
import visa from "../../assets/svg/visa.svg";
import paypal from "../../assets/svg/paypal.svg";
import product from "../../assets/images/product.png";
import { NavLink } from "react-router-dom";

function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handleRadioChange = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const price = 300.0;
  const discount = -10.0;
  const tax = 20.0;
  const total = price + discount + tax;

  return (
    <div className="checkout container">
      <div className="span-label">
        <h2>Checkout Page</h2>
        <div>
          <span>Details</span>
          <FaChevronRight className="icon-span" />
          <span>Shopping Cart</span>
          <FaChevronRight className="icon-span" />
          <span className="label">Chechout</span>
        </div>
      </div>
      <div className="left-right">
        <div className="checkout-left">
          <div className="country">
            <div className="country-state">
              <h3>Country</h3>
              <input type="text" placeholder="Enter Country" />
            </div>
            <div className="country-state">
              <h3>State/Union Territory</h3>
              <input type="text" placeholder="Enter State" />
            </div>
          </div>
          <h3>Payment Method</h3>
          <div className="carts">
            <div className="visa-paypal">
              <div className="visa">
                <input
                  type="radio"
                  id="credit-card"
                  name="payment-method"
                  onChange={() => handleRadioChange("credit-card")}
                />
                <label htmlFor="credit-card">Credit/Debit Card</label>
                <img src={visa} alt="" />
              </div>
              {selectedPayment === "credit-card" && (
                <div className="name-input">
                  <span>Name of Card</span>
                  <input type="text" placeholder="Name of Card" />
                  <span>Card Number</span>
                  <input type="text" placeholder="Card Number" />
                  <span>Expiry Date</span>
                  <input type="text" placeholder="Expiry Date" />
                </div>
              )}
            </div>
            <div className="visa-paypal">
              <div className="visa">
                <input
                  type="radio"
                  id="paypal"
                  name="payment-method"
                  onChange={() => handleRadioChange("paypal")}
                />
                <label htmlFor="paypal">PayPal</label>
                <img src={paypal} alt="" />
              </div>
              {selectedPayment === "paypal" && (
                <div className="name-input">
                  <span>Name of Card</span>
                  <input type="text" placeholder="Name of Card" />
                  <span>Card Number</span>
                  <input type="text" placeholder="Card Number" />
                  <span>Expiry Date</span>
                  <input type="text" placeholder="Expiry Date" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="checkout-right">
          <h3>Order Details</h3>
          <div className="order">
            <div className="order-details">
              <img src={product} alt="" />
              <div className="design">
                <h6>Design</h6>
                <span className="user">
                  Introduction to User Experience Design
                </span>
                <p className="lectures">155 Lectures . 22 Total Hours</p>
                <span className="user">$45.00</span>
              </div>
            </div>
            <div className="apply">APPLY COUPON CODE</div>
            <div className="summary-container">
              <div className="summary-item">
                <span>Price</span>
                <span>${price.toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <span>Discount</span>
                <span>${discount.toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr />
              <div className="summary-item total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <NavLink to="/order">
            <button className="btn">Label</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
