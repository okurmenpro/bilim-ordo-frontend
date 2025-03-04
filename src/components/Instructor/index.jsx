import React, { useState } from "react";
import "./Instructor.scss";
import AdminLogo from "../../assets/svg/logo2.svg";
import Dashboard from "../../assets/svg/dashboard.svg";
import IconCourse from "../../assets/svg/courses.svg";
import Cominication from "../../assets/svg/caminication.svg";
import Revenue from "../../assets/svg/revenue.svg";
import Setting from "../../assets/svg/setting.svg";
import UserIcon from "../../assets/images/autor.png";
import { NavLink, useNavigate } from "react-router-dom";

const Instructor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const userName = "Клиенттин аты";

  return (
    <div
      className={`sidebar2 ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NavLink to={"/instructor"} className="sidebar2__title-link">
        <div className="sidebar2__header">
          <img src={AdminLogo} alt="Logo" className="sidebar2__logo" />
          <strong className="sidebar2__title">Bilim-Ordo</strong>
        </div>
      </NavLink>

      <div className="sidebar2__nav">
        <NavLink to="/instructor/dashboard" className="sidebar2__nav-text">
          <div className="sidebar2__nav-item">
            <img
              src={Dashboard}
              alt="Dashboard"
              className="sidebar2__nav-icon"
            />
            Dashboard
          </div>
        </NavLink>
        <NavLink to="courses" className="sidebar2__nav-text">
          <div className="sidebar2__nav-item">
            <img
              src={IconCourse}
              alt="Courses"
              className="sidebar2__nav-icon"
            />
            Courses
          </div>
        </NavLink>
        <NavLink to="/communication" className="sidebar2__nav-text">
          <div className="sidebar2__nav-item">
            <img
              src={Cominication}
              alt="Communication"
              className="sidebar2__nav-icon"
            />
            Communication
          </div>
        </NavLink>
        <NavLink to="/revenue" className="sidebar2__nav-text">
          <div className="sidebar2__nav-item">
            <img src={Revenue} alt="Revenue" className="sidebar2__nav-icon" />
            Revenue
          </div>
        </NavLink>
        <NavLink to="/settings" className="sidebar2__nav-text">
          <div className="sidebar2__nav-item">
            <img src={Setting} alt="Setting" className="sidebar2__nav-icon" />
            Setting
          </div>
        </NavLink>
      </div>

      <div className="sidebar2__footer">
        <img src={UserIcon} alt="User" className="sidebar2__user-icon" />
        <strong className="sidebar2__user-greeting">Салам, alisher</strong>
      </div>
    </div>
  );
};

export default Instructor;