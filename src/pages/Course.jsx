import React from 'react'
import MaterialCourse from '../components/MaterialCourse'
import Banner from '../components/BannerCourse'
import Sidebar from "../components/Sidebar"
import { SidebarData } from '../data/Sidebar'
import video from "../assets/video/Python3.mp4"
import Index from '../components/MaterialCourse'

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
      <Banner/>
      <MaterialCourse/>
      <Index/>
    </div>
  )
}

export default Course
