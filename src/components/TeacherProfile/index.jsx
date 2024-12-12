import React, { useState } from "react";
import "./TeacherProfile.scss";
import { MdOutlineStarPurple500 as Star } from "react-icons/md";
import { TeacherProfileData } from "../../data/TeacherProfile"; // Массивди импорттоо
import Courses from "../Filter"

function TeacherProfile() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="teacher-profile container">
      <h1>Learner Reviews</h1>

      <div className="revis">
        <div className="reting-left">
          <div className="teachers-informetion">
            <Star className="star-yellow" />
            <strong>4.6</strong>
            <p>146,951 reviews</p>
          </div>

          {[...Array(5)].map((_, rowIndex) => {
            const percentage = (5 - rowIndex) * 20;
            return (
              <div className="star-row" key={rowIndex}>
                {[...Array(5)].map((_, index) => (
                  <Star
                    className={`icon-star ${index < 5 - rowIndex ? "star-yellow" : ""}`}
                    key={index + rowIndex * 5}
                  />
                ))}
                <span className="percentage">{percentage}%</span>
              </div>
            );
          })}
        </div>

        <div className="right-com">
          {TeacherProfileData.map((review) => (
            <div key={review.id} className="review-card">

              <div className="info-review">
                <img src={review.img} alt={review.name} className="review-avatar" />
                <h3>{review.name}</h3>
              </div>

              <div className="review-content">
                <div className="top-review">
                  <Star className="star-yellow" />
                  <span>{review.reting}</span>
                  <p className="review-date">{review.tema}</p>
                </div>

                <p>{review.text}</p>
              </div>
            </div>
          ))}
          <button>View more Reviews</button>
        </div>
      </div>
    </section>
  );
}

export default TeacherProfile;
