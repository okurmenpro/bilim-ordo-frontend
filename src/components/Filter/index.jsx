import React, { useState } from 'react'
import './Filter.scss'
import downchevron from "../../assets/svg/downchevron.svg";
import { GrSearch } from 'react-icons/gr';
import chevron from "../../assets/svg/chevron.svg";
import { MdOutlineStarPurple500 as Star } from "react-icons/md";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsFilter } from "react-icons/bs";

function Index({ name, count }) {
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
            <div className='my-courses'>
                <h1>{name}
                    {count > 0 && (
                        <span>  ({count})</span>
                    )}</h1>
                <div className='my-courses-top'>
                    <div className="my-course-search">
                        <input
                            placeholder="Search User"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                        />
                        <button className="button-search">
                            <GrSearch className="search-icon" />
                        </button>
                    </div>
                    <div className="course-search-right">
                        <div className="sort-by">
                            <p>Sort By</p>
                            <button>
                                <span>Relevance</span>
                                <IoIosArrowDown className='icon' />
                            </button>
                        </div>
                        <div className="left-raitng">
                            <button onClick={toggleModal} className="button-filter">
                                <BsFilter className='icon' />   Filter
                            </button>
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
                                                                    className={`icon-star ${index < 5 - rowIndex ? "star-yellow" : ""
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
