import React, { useState } from "react";
import "./Checkout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCcVisa,
  faPaypal,
  faCcMastercard,
  faGooglePay,
  faCcDiscover,
  faCcAmex,
} from "@fortawesome/free-brands-svg-icons";

function Checkout() {
  const originalPrice = 294.98;
  const discount = 248.0;
  const taxRate = 0.0825;
  const subtotal = originalPrice - discount;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const items = [
    {
      title: "Become a Product Manager | Learn the Skills & Get the Job",
      price: "$18.99",
      originalPrice: "$119.99",
      imageUrl: "https://i.ytimg.com/vi/cNwrDE7W77Q/hqdefault.jpg",
    },
    {
      title: "The Complete Flutter Development Bootcamp with Dart",
      price: "$27.99",
      originalPrice: "$174.99",
      imageUrl:
        "https://www.skilliency.com/uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_131712256534.jpg",
    },
  ];

  const [country, setCountry] = useState("United States");
  const [zipCode, setZipCode] = useState("");

  const [selectedMethod, setSelectedMethod] = useState("");

  const handleSelect = (method) => {
    setSelectedMethod(method);
  };
  const getMessage = () => {
    switch (selectedMethod) {
      case "visa":
        return "In order to complete your transaction, we will use Visa's secure servers.";
      case "paypal":
        return "In order to complete your transaction, we will transfer you over to PayPal's secure servers.";
      case "cards":
        return "In order to complete your transaction, we will use a secure server for card payment.";
      case "googlepay":
        return "In order to complete your transaction, we will transfer you over to Google Pay's secure servers.";
      case "afterpay":
        return "In order to complete your transaction, we will use Afterpay's secure servers.";
      case "klarna":
        return "In order to complete your transaction, we will use Klarna's secure servers.";
      default:
        return "";
    }
  };
  return (
    <div className="checkout container">
      <div className="checkout-left">
        <div className="checkout-form">
          <h2>Checkout</h2>
          <div className="billing-section">
            <h3>Billing address</h3>

            <div className="form-group">
              <label>
                Country
                <div className="select-wrapper">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="United States">Kyrgyzstan</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                  <span className="icon1">🌐</span>
                </div>
              </label>

              <label>
                ZIP code
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="ZIP code"
                />
              </label>
            </div>

            <p className="disclaimer">
              Udemy is required by law to collect applicable transaction taxes
              for purchases made in certain tax jurisdictions.
            </p>
          </div>
        </div>
        {/* ----------------------------------------- */}
        <div className="payment-method">
          <h3>Payment method</h3>
          <div
            className={`payment-option ${
              selectedMethod === "visa" ? "selected" : ""
            }`}
            onClick={() => handleSelect("visa")}
          >
            <input
              type="radio"
              id="visa"
              name="payment"
              checked={selectedMethod === "visa"}
              readOnly
            />
            <FontAwesomeIcon icon={faCcVisa} className="icon" />
            <label htmlFor="visa">Visa **** 9720</label>
          </div>
          <div
            className={`payment-option ${
              selectedMethod === "paypal" ? "selected" : ""
            }`}
            onClick={() => handleSelect("paypal")}
          >
            <input
              type="radio"
              id="paypal"
              name="payment"
              checked={selectedMethod === "paypal"}
              readOnly
            />
            <FontAwesomeIcon icon={faPaypal} className="icon" />
            <label htmlFor="paypal">PayPal</label>
          </div>
          <div
            className={`payment-option ${
              selectedMethod === "cards" ? "selected" : ""
            }`}
            onClick={() => handleSelect("cards")}
          >
            <input
              type="radio"
              id="cards"
              name="payment"
              checked={selectedMethod === "cards"}
              readOnly
            />
            <FontAwesomeIcon icon={faCcMastercard} className="icon" />
            <label htmlFor="cards">Cards</label>
          </div>
          <div
            className={`payment-option ${
              selectedMethod === "googlepay" ? "selected" : ""
            }`}
            onClick={() => handleSelect("googlepay")}
          >
            <input
              type="radio"
              id="googlepay"
              name="payment"
              checked={selectedMethod === "googlepay"}
              readOnly
            />
            <FontAwesomeIcon icon={faGooglePay} className="icon" />
            <label htmlFor="googlepay">Google Pay</label>
          </div>
          <div
            className={`payment-option ${
              selectedMethod === "afterpay" ? "selected" : ""
            }`}
            onClick={() => handleSelect("afterpay")}
          >
            <input
              type="radio"
              id="afterpay"
              name="payment"
              checked={selectedMethod === "afterpay"}
              readOnly
            />
            <FontAwesomeIcon icon={faCcDiscover} className="icon" />
            <label htmlFor="afterpay">Afterpay</label>
          </div>
          <div
            className={`payment-option ${
              selectedMethod === "klarna" ? "selected" : ""
            }`}
            onClick={() => handleSelect("klarna")}
          >
            <input
              type="radio"
              id="klarna"
              name="payment"
              checked={selectedMethod === "klarna"}
              readOnly
            />
            <FontAwesomeIcon icon={faCcAmex} className="icon" />
            <label htmlFor="klarna">Klarna</label>
          </div>

          <div className="message">{getMessage()}</div>
        </div>
        <div className="order-details">
          <h3>Order details</h3>
          <div className="order-list">
            {items.map((item, index) => (
              <div className="order-item" key={index}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="course-image"
                />
                <div className="course-details">
                  <span className="course-title">
                    <Link to="/course">{item.title}</Link>
                  </span>
                  <div className="course-price">
                    <span className="price">{item.price}</span>
                    <span className="original-price">{item.originalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="checkout-right">
        <div className="summary-container">
          <h2 className="summary-title">Summary</h2>
          <div className="line-item">
            <span>Original Price:</span>
            <span>${originalPrice.toFixed(2)}</span>
          </div>
          <hr></hr>
          <div className="line-item">
            <span>Discounts:</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <hr></hr>
          <div className="line-item">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <hr></hr>
          <div className="line-item">
            <span>Tax (8.25%):</span>
            <span>+${tax.toFixed(2)}</span>
          </div>
          <hr></hr>
          <div className="line-item total-line">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <span className="line-service">
            By completing your purchase you agree to these{" "}
            <span>Terms of Service.</span>
          </span>
          <button className="proceed-button">Proceed</button>
          <p className="money-back-note">30-Day Money-Back Guarantee</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
