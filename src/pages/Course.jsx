import React from "react";
import MaterialCourse from "../components/MaterialCourse";
import BannerCourse from "../components/bannerCourse";
import Sidebar from "../components/Sidebar";
import { SidebarData } from "../data/Sidebar";
import video from "../assets/video/Python3.mp4";
import Reviews from "../components/Reviews";
import TeacherProfile from "../components/TeacherProfile";

function Course() {
  return (
    <div>
      <BannerCourse />
      <Sidebar />
      <MaterialCourse />
      <TeacherProfile />
      <Reviews />
    </div>
  );
}

export default Course;
