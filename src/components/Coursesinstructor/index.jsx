import React, { useState } from "react";
import "./Coursesinstructor.scss";
import MyCourses from "./Mycourses";
import AddCourse from "./AddCourse";

function Coursesinstructor() {
  const [activeTab, setActiveTab] = useState("myCourses");

  return (
    <div className="course-container">
      <nav>
        <button onClick={() => setActiveTab("myCourses")}>Менин курстарым</button>
        <button onClick={() => setActiveTab("addCourse")}>Курс кошуу</button>
      </nav>

      <div className="content">
        {activeTab === "myCourses" && <MyCourses />}
        {activeTab === "addCourse" && <AddCourse />}
      </div>
    </div>
  );
}

export default Coursesinstructor;
