import React from 'react'
import OrderVideo from '../components/OrderVideo'
import ToggleTextButton from '../components/CourseCompetion'
import Courseskills from '../components/Courseskills'
import BannerCourse from '../components/BannerCourse'
import Programmingexercises from '../components/Programmingexercises'
import Buttons from '../components/CourseButtons'
import Topcourses from '../components/Topcourses'
import Footer from '../components/Footer'
import TeacherProfile from '../components/TeacherProfile'

function orderComplete() {
  return (
    <div className='ordercomplete'>
          <OrderVideo />
          <ToggleTextButton />
          <Buttons />
          <Courseskills />
          <Programmingexercises />
          <Topcourses />
          <TeacherProfile />
        </div>

  )
}

export default orderComplete 