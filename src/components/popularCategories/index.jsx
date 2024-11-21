import React, { useState } from "react";
import { popular_categories } from "../../data/popular_categories";
import "./PopularCategories.scss";

const PopularCategories = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const handleClick = () => {
    setIsDropdownVisible((oldValue) => !oldValue);
  };

  return (
    <>
      <div className="title">
        <h2>Популярные категории</h2>
      </div>
      <div className="photos">
        {popular_categories.map((elements, index) => (
          <div key={index} className="border-png">
            <div className="background">
              <img src={elements.img} alt="" />
            </div>
            <p>{elements.title}</p>
          </div>
        ))}
      </div>
      <div className="dropdowns-pop-categories">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={handleClick}
        >
          Посмотреть еще
        </button>
        <ul
          className={`dropdown-menu ${isDropdownVisible ? "show" : ""}`}
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PopularCategories;
