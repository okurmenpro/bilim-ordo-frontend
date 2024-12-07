import React from "react";
import MaterialCourse from "../components/MaterialCourse";
import BannerCourse from "../components/BannerCourse";
import Sidebar from "../components/Sidebar";
import TeacherProfile from "../components/TeacherProfile";
import Programmingexercises from "../components/Programmingexercises/index";
import Skills from "../components/Courseskills";
import HomeReviews from "../components/HomeReviews";
import TopCourses from "../components/Topcourses";
import Buttons from "../components/CourseButtons";

function Course() {
  return (
    <div style={{ position: "relative" }}>
      <BannerCourse />
      <Sidebar />
      <Buttons />
      <Skills />
      <Programmingexercises />
      <MaterialCourse />
      <TeacherProfile />
      <HomeReviews />
      <TopCourses />
    </div>
  );
}

export default Course;
