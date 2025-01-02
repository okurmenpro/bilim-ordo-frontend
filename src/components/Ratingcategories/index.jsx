import React, { useState } from "react";
import "./infocategories.css";
import { MdOutlineStarPurple500 as Star } from "react-icons/md";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import Topcoursescategories from "../Topcoursescategories";
import chevron from "../../assets/svg/chevron.svg";
import label from "../../assets/svg/label.svg";
import downchevron from "../../assets/svg/downchevron.svg";

function Ratingcategories() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  const [isRatingOpen, setRatingOpen] = useState(false);
  const [isChaptersOpen, setChaptersOpen] = useState(false);
  const [isLabelOpen, setLabelOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setSelectedCategory(null);
  };

  const toggleRating = () => {
    setRatingOpen((prev) => !prev);
  };

  const toggleChapters = () => {
    setChaptersOpen((prev) => !prev);
  };

  const toggleLabel = () => {
    setLabelOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="categories-container">
        <div className="left-raitng">
          <div className="text-h2h3">
            <h2>DesignCourses</h2>
            <h3>All Development Courses</h3>
            <button onClick={toggleMenu}>
              <img src={label} alt="" />
              <p>Label</p>
            </button>
          </div>

          <div className={`modal-content1 ${isMenuOpen ? "open" : ""}`}>
            {/* Здесь применяем классы для анимации скрытия/показа */}
            <div className="star-rating">
              <div className="filter-rating" onClick={toggleRating}>
                <p>Rating</p>
                <img
                  src={chevron}
                  alt=""
                  className={isRatingOpen ? "rotate" : ""}
                />
              </div>
              {isRatingOpen && (
                <div className="star-con">
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
              <div className="filter-age" onClick={toggleChapters}>
                <p>Number of Chapters</p>
                <img
                  src={chevron}
                  alt=""
                  className={isChaptersOpen ? "rotate" : ""}
                />
              </div>
              {isChaptersOpen && (
                <div>
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
            <div className="filter-label" onClick={toggleLabel}>
              <p>Label</p>
              <img
                src={downchevron}
                alt=""
                className={isLabelOpen ? "rotate" : ""}
              />
            </div>
            {isLabelOpen && (
              <div>
                <div className="filter-chevron">
                  <p>filter</p>
                  <img src={chevron} alt="" />
                </div>
                <div className="filter-chevron">
                  <p>filter</p>
                  <img src={chevron} alt="" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="topcousescategories">
          <Topcoursescategories />
        </div>
      </div>
    </div>
  );
}

export default Ratingcategories;
