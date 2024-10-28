import React, { useState } from 'react'
import "./Reviews.scss"
import { DataReviews } from "../../data/Reviews.js";
import { FaStar } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";

const Reviews = () => {
    const [ReviewsData, setReviewsData] = useState(DataReviews)

    return (
        <div className='reviews '>
            <h2>Отзывы</h2>
            <div className="reviews-carts">
                {DataReviews.map(el => (
                    <div className="cart">
                        <div className="first">
                            <img className='avatar' src={el.img} alt="" />
                            <div className="f-right">
                                <h3>{el.name}</h3>
                                <div className="stars">
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                </div>
                            </div>
                        </div>
                        <p>{el.text}</p>
                        <div className="end">
                            <BiLike className='hand' />
                            <BiDislike className='hand' />
                        </div>
                    </div>
                ))}
            </div>
            <button>Посмотреть все отзывы</button>
        </div>
    )
}

export default Reviews