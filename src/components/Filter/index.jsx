import React, { useState } from "react";
import "./Filter.scss";
import downchevron from "../../assets/svg/downchevron.svg";
import { GrSearch } from "react-icons/gr";
import chevron from "../../assets/svg/chevron.svg";
import { MdOutlineStarPurple500 as Star } from "react-icons/md";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

import {
  IoIosArrowDown,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { BsFilter } from "react-icons/bs";

function FilterComponent({ name, count }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStarVisible, setIsStarVisible] = useState(true);
  const [isCheckboxVisible, setIsCheckboxVisible] = useState(true);
  const [isFilterChevronVisible, setIsFilterChevronVisible] = useState(true);

  const toggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };
  const toggleFilterChevron = () => {
    setIsFilterChevronVisible((prev) => !prev);
  };

  const toggleStarVisibility = () => {
    setIsStarVisible((prev) => !prev);
  };

  const toggleCheckboxVisibility = () => {
    setIsCheckboxVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="filter-container">
        <h1>
          {name}
          {count > 0 && <span> ({count})</span>}
        </h1>
        <div className="filter-header">
          <div className="filter-search">
            <input
              placeholder="Search User"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <button className="search-button">
              <GrSearch className="search-icon" />
            </button>
          </div>
          <div className="filter-actions">
            <div className="sort-actions">
              <p>Sort By</p>
              <button>
                <span>Relevance</span>
                <IoIosArrowDown className="arrow-icon" />
              </button>
            </div>
            <div className="rating-actions">
              <button onClick={toggleModal} className="filter-button">
                <BsFilter className="icon" /> Filter
              </button>
              {isModalVisible && (
                <div className="modal-overlay active">
                  <div className="modal-content">
                    <button className="close-button" onClick={toggleModal}>
                      <CloseIcon size={20} />
                    </button>
                    <div className="rating-filter">
                      <div className="rating-header">
                        <p>Rating</p>
                        <img
                          onClick={toggleStarVisibility}
                          src={chevron}
                          alt=""
                        />
                      </div>
                      {isStarVisible && (
                        <div>
                          {[...Array(5)].map((_, rowIndex) => (
                            <div className="star-row" key={rowIndex}>
                              {[...Array(5)].map((_, index) => (
                                <Star
                                  className={`star-icon ${
                                    index < 5 - rowIndex ? "yellow-star" : ""
                                  }`}
                                  key={index + rowIndex * 5}
                                />
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="age-checkbox">
                      <div className="age-filter-header">
                        <p>Number of Chapters</p>
                        <img
                          onClick={toggleCheckboxVisibility}
                          src={chevron}
                          alt=""
                        />
                      </div>
                      {isCheckboxVisible && (
                        <div>
                          <div className="checkbox-item">
                            <input type="checkbox" />
                            <p>1-10</p>
                          </div>
                          <div className="checkbox-item">
                            <input type="checkbox" />
                            <p>10-15</p>
                          </div>
                          <div className="checkbox-item">
                            <input type="checkbox" />
                            <p>15-20</p>
                          </div>
                          <div className="checkbox-item">
                            <input type="checkbox" />
                            <p>20-25</p>
                          </div>
                        </div>
                      )}
                      <div
                        onClick={toggleFilterChevron}
                        className="filter-label"
                      >
                        <p>label</p>
                        <img src={downchevron} alt="" />
                      </div>
                      {isFilterChevronVisible && (
                        <div>
                          <div className="filter-item">
                            <p>filter</p>
                            <img src={chevron} alt="" />
                          </div>
                          <div className="filter-item">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
