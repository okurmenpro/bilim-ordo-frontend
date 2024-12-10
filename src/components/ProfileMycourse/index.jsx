import React from 'react'
import "./ProfileMycourse.scss"
import Topcoursescategories from '../Topcoursescategories'
import Courses from "../Courses/Index"


function index() {
  return (
        <div className='my-course'>
            <Courses/>
            <Topcoursescategories/>
        </div>
  )
}

export default index
