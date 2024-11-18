import React from "react";

const CardContainer = ({ elem }) => {
  console.log(elem);
  return (
    <div className="cart-1 container">
      <h2 style={{ marginRight: "800px", fontWeight: "700", fontSize: "30px" }}>
        title: {elem.title};{" "}
      </h2>
    </div>
  );
};

export default CardContainer;

// import "./Container.css";

// function CardContainer({ name }) {
//   if (!name) {
//     return <p>Курс не найден</p>;
//   }
//   console.log(name.title);

//   return (
//     <div className="cart-1 container">
//       <h2 style={{ marginRight: "800px", fontWeight: "700", fontSize: "30px" }}>
//         Title: {name.title}
//       </h2>
//     </div>
//   );
// }

// export default CardContainer;
