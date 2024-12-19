import React from "react";
import "./ProfileMycourse.scss";
import Topcoursescategories from "../Topcoursescategories";
import Courses from "../Filter";
import { topcourse } from "../../data/Topcourse.js";

function index() {
  return (
    <div className="my-course">
      <Courses name="Courses" count={topcourse.length} />
      <Topcoursescategories />
    </div>
  );
}

export default index;
