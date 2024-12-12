import React, { useState } from "react";
import "./infocategories.css";
import { MdOutlineStarPurple500 as Star } from "react-icons/md";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import Topcoursescategories from "../Topcoursescategories";
import chevron from "../../assets/svg/chevron.svg";
import downchevron from "../../assets/svg/downchevron.svg";

function Ratingcategories() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStarVisible, setIsStarVisible] = useState(true);
  const [isCheckboxVisible, setIsCheckboxVisible] = useState(true);
  const [isfilterchevron, setIsfilterchevron] = useState(true);

  const toggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };
  const filterchevron = () => {
    setIsfilterchevron((prev) => !prev);
  };

  const toggleStarVisibility = () => {
    setIsStarVisible((prev) => !prev);
  };

  const toggleCheckboxVisibility = () => {
    setIsCheckboxVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="categories-container">
        <div className="left-raitng">
          <div className="text-h2h3">
            <h2>DesignCourses</h2>
            <h3>All Development Courses</h3>
            <button
              onClick={toggleModal}
              className={isModalVisible ? "active" : ""}
            >
              <p>Label</p>
            </button>
          </div>
          {isModalVisible && (
            <div className="modal-overlay active">
              <div className="modal-content">
                <button className="close-btn" onClick={toggleModal}>
                  <CloseIcon size={20} />
                </button>
                <div className="star-rating">
                  <div className="filter-rating">
                    <p>Rating</p>
                    <img onClick={toggleStarVisibility} src={chevron} alt="" />
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
                  <div className="filter-age">
                    <p>Number of Chapters</p>
                    <img
                      onClick={toggleCheckboxVisibility}
                      src={chevron}
                      alt=""
                    />
                  </div>
                  {isCheckboxVisible && (
                    <div>
                      <div className="checkbox-input1">
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
                  <div onClick={filterchevron} className="filter-label">
                    <p>label</p>
                    <img src={downchevron} alt="" />
                  </div>
                  {isfilterchevron && (
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
            </div>
          )}
        </div>

        <div className="topcousescategories">
          <div className="sortby">
            <p>Sort By</p>
            <button>
              <span>Relevance</span>
              <img src={downchevron} alt="" />
            </button>
          </div>
          <Topcoursescategories />
        </div>
      </div>
    </div>
  );
}

export default Ratingcategories;
