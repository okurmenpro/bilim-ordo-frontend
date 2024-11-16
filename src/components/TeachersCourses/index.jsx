import React from "react";
import "./TeachersCourses.scss";
import Card from "../Card";

const TeachersCourses = () => {
  return (
    <div id="container-teachers-courses">
      <div className="teachers-courses">
        <Card /> {/* Внутри компонента Card будет кнопка */}
      </div>
    </div>
  );
};

export default TeachersCourses;
