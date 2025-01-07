import React, { useState } from "react";
import "./infocategories.css";
import { MdOutlineStarPurple500 as Star } from "react-icons/md";
import Topcoursescategories from "../Topcoursescategories";
import chevron from "../../assets/svg/chevron.svg";
import label from "../../assets/svg/label.svg";
import downchevron from "../../assets/svg/downchevron.svg";

function Ratingcategories() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isRatingOpen, setRatingOpen] = useState(false);
  const [isChaptersOpen, setChaptersOpen] = useState(false);
  const [isLabelOpen, setLabelOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
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
    <div className="categories-container">
      <div className="left-rating">
        <div className="text-h2h3">
          <h2>DesignCourses</h2>
          <h3>All Development Courses</h3>
          <button onClick={toggleMenu} className="menu-toggle-button">
            <img src={label} alt="Label" />
            <p>Label</p>
          </button>
        </div>

        {/* Modal */}
        <div className={`modal-content1 ${isMenuOpen ? "open" : ""}`}>
          <div className="star-rating">
            <div className="filter-rating" onClick={toggleRating}>
              <p>Rating</p>
              <img
                src={chevron}
                alt="Chevron"
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
                alt="Chevron"
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
              alt="Chevron"
              className={isLabelOpen ? "rotate" : ""}
            />
          </div>
          {isLabelOpen && (
            <div>
              <div className="filter-chevron">
                <p>Filter</p>
                <img src={chevron} alt="Chevron" />
              </div>
              <div className="filter-chevron">
                <p>Filter</p>
                <img src={chevron} alt="Chevron" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="topcousescategories2">
        <Topcoursescategories />
      </div>
    </div>
  );
}

export default Ratingcategories;
