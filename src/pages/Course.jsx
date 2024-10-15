
import React from 'react'
import MaterialCourse from '../components/MaterialCourse'
import BannerCourse from '../components/BannerCourse'
import Sidebar from "../components/Sidebar"
import { SidebarData } from '../data/Sidebar'
import video from "../assets/video/Python3.mp4"
import Index from '../components/MaterialCourse'
import Reviews from "../components/Reviews";
import TeacherProfile from "../components/TeacherProfile";

function Course() {
  const price = 13.99;
  const originalPrice = 74.99;
  const discount = 81;
  const daysLeft = 2;
  const coupon = "ST15MT100124B";

  return (
    <div>
       <Sidebar 
          price={price} 
          originalPrice={originalPrice} 
          discount={discount} 
          daysLeft={daysLeft} 
          courses={SidebarData} 
          coupon={coupon} 
          videoSrc={video}
        />
      <BannerCourse/>
      <MaterialCourse/>
      <Index/>
      <TeacherProfile />
      <Reviews />
    </div>
  );
}

export default Course;
