import React, { useState } from "react";
import "./infocategories.css";
import Filter from "../../assets/svg/filter.svg";
import chevron from "../../assets/svg/chevron.svg";
import downchevron from "../../assets/svg/downchevron.svg";

import { MdOutlineStarPurple500 as Star } from "react-icons/md";

function Ratingcategories() {
  const [isStarVisible, setIsStarVisible] = useState(true); // состояние для звезд
  const [isCheckboxVisible, setIsCheckboxVisible] = useState(true); // состояние для чекбоксов

  const toggleStarVisibility = () => {
    setIsStarVisible((prev) => !prev);
  };

  const toggleCheckboxVisibility = () => {
    setIsCheckboxVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="categories-container">
        <div className="text-h2h3">
          <h2>Design Courses</h2>
          <h3>All Development Courses</h3>
          <button>
            <img src={Filter} alt="" />
            <p>Label</p>
          </button>
        </div>
        <div className="star-rating">
          <div className="filter-rating" onClick={toggleStarVisibility}>
            <p>Rating</p>
            <img
              src={isStarVisible ? chevron : downchevron} // меняем иконку
              alt=""
            />
          </div>
          {isStarVisible && (
            <div>
              {[...Array(5)].map((_, rowIndex) => (
                <div className="star-row" key={rowIndex}>
                  {[...Array(5)].map((_, index) => (
                    <Star
                      className={`icon-star ${
                        index < 5 - rowIndex ? "star-yellow" : ""
                      }`}
                      key={index + rowIndex * 5}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="checkbox-age">
          <div className="filter-age" onClick={toggleCheckboxVisibility}>
            {/* Клик на chevron для показа/скрытия чекбоксов */}
            <p>Number of Chaptu</p>
            <img
              src={isCheckboxVisible ? chevron : downchevron} // меняем иконку
              alt=""
            />
          </div>
          {isCheckboxVisible && (
            <div>
              {/* Показываем чекбоксы, если isCheckboxVisible === true */}
              <div className="checkbox-input">
                <input type="checkbox" />
                <p>1-10</p>
              </div>
              <div className="checkbox-input">
                <input type="checkbox" />
                <p>10-15</p>
              </div>
              <div className="checkbox-input">
                <input type="checkbox" />
                <p>15-20</p>
              </div>
              <div className="checkbox-input">
                <input type="checkbox" />
                <p>20-25</p>
              </div>
            </div>
          )}
        </div>
        <div className="filter-chevron">
          <p>Filter</p>
          <img src={chevron} alt="" />
        </div>
        <div className="filter-chevron">
          <p>Filter</p>
          <img src={chevron} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Ratingcategories;
