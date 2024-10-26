import React from "react";
import MaterialCourse from "../components/MaterialCourse";
import BannerCourse from "../components/BannerCourse/index.jsx";
import Sidebar from "../components/Sidebar";
import Reviews from "../components/Reviews";
import TeacherProfile from "../components/TeacherProfile";
import Course2 from "../components/Course/index.jsx";
import { SidebarData } from '../data/Sidebar'
import video from "../assets/video/Python3.mp4"





function Course() {
  return (
    <div>
      <BannerCourse />
      <Sidebar />
      <MaterialCourse />
      <Course2 />
      <TeacherProfile />
      <Reviews />
    </div>
  );
}

export default Course;
