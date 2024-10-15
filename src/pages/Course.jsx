import React from 'react'
import MaterialCourse from '../components/MaterialCourse'
import BannerCourse from '../components/BannerCourse'
import Sidebar from "../components/Sidebar"
import { SidebarData } from '../data/Sidebar'
import video from "../assets/video/Python3.mp4"
import Index from '../components/MaterialCourse'
import Reviews from '../components/Reviews'

function Course() {
  return (
    <div>
      <BannerCourse />
      <Sidebar
        price={price}
        originalPrice={originalPrice}
        discount={discount}
        daysLeft={daysLeft}
        courses={SidebarData}
        coupon={coupon}
        videoSrc={video}
      />
      <MaterialCourse />
      <Index />
      <Reviews />
    </div>
  )
}

export default Course
