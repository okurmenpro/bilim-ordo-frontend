import React from "react";
import "./AboutCourse.css";
import { NavLink } from "react-router-dom";

function AboutCourse() {
  return (
    <div>
      <div className="instructor-box container">
        <div className="info-ins">
          <p>go to add course</p>
          <NavLink to={"/instructor/courses"}>
            <button className="ins-btn">add course</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default AboutCourse;
