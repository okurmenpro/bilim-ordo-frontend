import React from "react";

const CardContainer = ({ children, name, id }) => {
  return (
    <div className="cart-1 container">
      <h2 style={{ marginRight: "800px", fontWeight: "700", fontSize: "30px" }}>
        {name}
      </h2>
      {children}
    </div>
  );
};

export default CardContainer;
