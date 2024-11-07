import React from "react";
import MaterialCourse from "../components/MaterialCourse";
import BannerCourse from "../components/bannerCourse";
import Sidebar from "../components/Sidebar";
import Reviews from "../components/Reviews";
import TeacherProfile from "../components/TeacherProfile";
import Programmingexercises from "../components/Programmingexercises/index";
import Skills from "../components/Courseskills";

function Course() {
  return (
    <div style={{position: "relative"}}>
      <BannerCourse />
      <Sidebar />
      <Skills />
      <Programmingexercises/>
      <MaterialCourse />
      <TeacherProfile />
      <Reviews />
    </div>
  );
}

export default Course;  
