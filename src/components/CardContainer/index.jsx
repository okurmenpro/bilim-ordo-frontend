import React, { useContext } from "react";
import "./Container.css";

function CardContainer({ children, name }) {
  return (
    <div className="cart-1 container">
      <h2
        style={{
          marginRight: "800px",
          fontWeight: "700",
          fontSize: "30px",
          paddingTop: "50px",
        }}
      >
        {name}
      </h2>
      {children}
    </div>
  );
}

export default CardContainer;
