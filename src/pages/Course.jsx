import React from "react";
import MaterialCourse from "../components/MaterialCourse";
import Sidebar from "../components/Sidebar";
import Reviews from "../components/Reviews";
import TeacherProfile from "../components/TeacherProfile";
import BannerCourse from '../components/bannerCourse'
import { SidebarData } from '../data/Sidebar'
import video from "../assets/video/Python3.mp4"





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
