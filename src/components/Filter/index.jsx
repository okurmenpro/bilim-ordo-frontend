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
            <div className='my-courses1'>
                <h1>{name}
                    {count > 0 && (
                        <span>  ({count})</span>
                    )}</h1>
                <div className='my-courses-top1'>
                    <div className="my-course-search1">
                        <input
                            placeholder="Search User"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                        />
                        <button className="button-search1">
                            <GrSearch className="search-icon1" />
                        </button>
                    </div>
                    <div className="course-search-right1">
                        <div className="sort-by1">
                            <p>Sort By</p>
                            <button>
                                <span>Relevance</span>
                                <IoIosArrowDown className='icon1' />
                            </button>
                        </div>
                        <div className="left-raitng1">
                            <button onClick={toggleModal} className="button-filter1">
                                <BsFilter className='icon1' />   Filter
                            </button>
                            {isModalVisible && (
                                <div className="modal-overlay active1">
                                    <div className="modal-content1">
                                        <button className="close-btn1" onClick={toggleModal}>
                                            <CloseIcon size={20} />
                                        </button>
                                        <div className="star-rating1">
                                            <div className="filter-rating1">
                                                <p>Rating</p>
                                                <img onClick={toggleStarVisibility} src={chevron} alt="" />
                                            </div>
                                            {isStarVisible && (
                                                <div>
                                                    {[...Array(5)].map((_, rowIndex) => (
                                                        <div className="star-row1" key={rowIndex}>
                                                            {[...Array(5)].map((_, index) => (
                                                                <Star
                                                                    className={`icon-star1 ${index < 5 - rowIndex ? "star-yellow1" : ""
                                                                        }`}
                                                                    key={index + rowIndex * 5}
                                                                />
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                        <div className="checkbox-age1">
                                            <div className="filter-age1">
                                                <p>Number of Chapters</p>
                                                <img
                                                    onClick={toggleCheckboxVisibility}
                                                    src={chevron}
                                                    alt=""
                                                />
                                            </div>
                                            {isCheckboxVisible && (
                                                <div>
                                                    <div className="checkbox-input11">
                                                        <input type="checkbox1" />
                                                        <p>1-10</p>
                                                    </div>
                                                    <div className="checkbox-input1">
                                                        <input type="checkbox1" />
                                                        <p>10-15</p>
                                                    </div>
                                                    <div className="checkbox-input1">
                                                        <input type="checkbox1" />
                                                        <p>15-20</p>
                                                    </div>
                                                    <div className="checkbox-input1">
                                                        <input type="checkbox1" />
                                                        <p>20-25</p>
                                                    </div>
                                                </div>
                                            )}
                                            <div onClick={filterchevron} className="filter-label1">
                                                <p>label</p>
                                                <img src={downchevron} alt="" />
                                            </div>
                                            {isfilterchevron && (
                                                <div>
                                                    <div className="filter-chevron1">
                                                        <p>filter</p>
                                                        <img src={chevron} alt="" />
                                                    </div>
                                                    <div className="filter-chevron1">
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
