import React, { useContext } from "react";
import "./Container.css";
import { NavLink } from "react-router-dom";

function CardContainer({ children, name, text }) {
  return (
    <div className="cart-1 container">
      <h2>{name}</h2>
      <NavLink to={"/categoriespage"}>
        <p>{text}</p>
      </NavLink>
      {children}
    </div>
  );
}

export default CardContainer;
