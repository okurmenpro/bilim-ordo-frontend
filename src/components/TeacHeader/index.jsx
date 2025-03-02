import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserAlt as User } from "react-icons/fa";
import "./Style.scss";

function TeacHeader() {
  return (
    <div>
      <div className="header-instructor container">
        <NavLink to={"/"}>
          <strong className="student">student</strong>
        </NavLink>
        <NavLink to={"/profile"}>
          <User className="icon-user" />
        </NavLink>
      </div>
    </div>
  );
}

export default TeacHeader;
