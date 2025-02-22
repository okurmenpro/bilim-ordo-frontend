import React, { useState } from "react";
import "./Coursesinstructor.scss";
import MyCourses from "./Mycourses";
import AddCourse from "./AddCourse";
import Settings from "./Setting";

function Coursesinstructor() {
  const [activeTab, setActiveTab] = useState("myCourses");

  return (
    <div className="course-container">
      <nav>
        <button onClick={() => setActiveTab("myCourses")}>Менин курстарым</button>
        <button onClick={() => setActiveTab("addCourse")}>Курс кошуу</button>
        <button onClick={() => setActiveTab("settings")}>Настройки</button>
      </nav>

      <div className="content">
        {activeTab === "myCourses" && <MyCourses />}
        {activeTab === "addCourse" && <AddCourse />}
        {activeTab === "settings" && <Settings />}
      </div>
    </div>
  );
}

export default Coursesinstructor;
