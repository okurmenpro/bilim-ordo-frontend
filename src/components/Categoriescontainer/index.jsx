import React from "react";

function Categoriescontainer({ children, namer }) {
  return (
    <div className="Categoriescontainer container">
      <h2
        style={{
          fontWeight: "bold",
          fontfamily: "Inter",
          textAlign: "left",
        }}
      >
        {namer}
      </h2>
      {children}
    </div>
  );
}

export default Categoriescontainer;
