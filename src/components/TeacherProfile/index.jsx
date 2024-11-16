import React, { useState } from "react";
import "./TeacherProfile.scss";
import { GoStarFill } from "react-icons/go";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { TeacherProfileData } from "../../data/TeacherProfile";
import { NavLink } from "react-router-dom";
function TeacherProfile() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [teacherData, setTeacherData] = useState(TeacherProfileData);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="teacher-profile container">
      <h1>Преподаватель</h1>
      {teacherData.map((el) => (
        <div className="">
          <NavLink to="/mycourses">
            <h2>
              {el.name} | {el.work}
            </h2>
          </NavLink>
          <h3>{el.slogan}</h3>
          <div className="aboutTeacher">
            <img id="teach-img" src={el.img} alt="Преподаватель" />
            <div className="statistics">
              <div className="aboutStatistic">
                <GoStarFill className="icon" />
                <strong id="strong">{el.rating} рейтинг</strong>
              </div>
              <div className="aboutStatistic">
                <VscPreview className="icon" />
                <strong>{el.numberReviews} отзывов</strong>
              </div>
              <div className="aboutStatistic">
                <IoPeopleSharp className="icon" />
                <strong>{el.numberStudets} студентов</strong>
              </div>
              <div className="aboutStatistic">
                <MdOutlineSlowMotionVideo className="icon" />
                <strong>{el.numberCourses} курса</strong>
              </div>
            </div>
          </div>
          <p>{el.text1}</p>
          <p>{el.text2}</p>
          <p>{el.text3}</p>
          <p>{el.text4}</p>
          {isExpanded && (
            <>
              <p>{el.text5}</p>
              <p>{el.text6}</p>
              <p>{el.text7}</p>
            </>
          )}
          <div className="toggleButton">
            <strong className="toggle-button" onClick={toggleText}>
              {isExpanded ? "Свернуть" : "Развернуть"}
            </strong>
            <IoIosArrowDown className="arrow" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default TeacherProfile;
