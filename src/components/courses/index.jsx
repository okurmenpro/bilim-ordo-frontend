import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Courses.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { coursesData } from "../../data/courses";

function Courses() {
  const [coursesData, setCoursesData] = useState(coursesData);

  const getCourses = async () => {
    try {
      const response = await axios.get("/coursesData");
      setCoursesData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      {coursesData.map((course) => (
        <NavLink key={course.id} to="/course">
          <div className="courses">
            <div className="courses-left">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="courses-right">
              <div className="courses-h1">
                <h2>{course.title}</h2>
                <p>{course.price}$</p>
              </div>

              <div className="courses-p">
                <p>{course.description}</p>
                <h3>{course.oldPrice}$</h3>
              </div>

              <div className="courses-3text">
                <p className="author">{course.author}</p>
                <div className="courses-flex">
                  <h3>{course.rating}</h3>
                  {[...Array(Math.floor(course.rating))].map((_, index) => (
                    <MdOutlineStarPurple500 key={index} className="star-5" />
                  ))}
                  <p>({course.reviews})</p>
                </div>
                <p>{course.totalHours}</p>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Courses;
