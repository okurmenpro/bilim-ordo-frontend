import React, { useContext } from "react";
import "./Container.css";

function CardContainer({ children, name, text }) {
  return (
    <div className="cart-1 container">
      <h2>{name}</h2>
      <p>{text}</p>
      {children}
    </div>
  );
}

export default CardContainer;
