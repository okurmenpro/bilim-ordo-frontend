import React from "react";
import MaterialCourse from "../components/MaterialCourse";
import BannerCourse from "../components/BannerCourse";
import Sidebar from "../components/Sidebar";
import Reviews from "../components/Reviews";
import TeacherProfile from "../components/TeacherProfile";
import Programmingexercises from "../components/Programmingexercises/index";
import Pythonskills from "../components/Courseskills";

function Course() {
  return (
    <div>
      <BannerCourse />
      <Sidebar />
      <Pythonskills />
      <Programmingexercises/>
      <MaterialCourse />
      <TeacherProfile />
      <Reviews />
    </div>
  );
}

export default Course;  
