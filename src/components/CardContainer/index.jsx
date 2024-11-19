import React from "react";
import "./Container.css";

const CardContainer = ({ elem }) => {
  // console.log(elem);
  console.log("elem:", JSON.stringify(elem, null, 2));
  return (
    <div className="cart-1 container">
      <h2 style={{ marginRight: "800px", fontWeight: "700", fontSize: "30px" }}>
        title: {JSON.stringify(elem, null, 2)};
      </h2>
      {/* <p style={{ fontSize: "16px", color: "#555" }}>{elem.description}</p> */}
    </div>
  );
};
export default CardContainer;
