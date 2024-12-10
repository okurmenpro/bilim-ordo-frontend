import React from 'react'
import "./ProfileMycourse.scss"
import Topcoursescategories from '../Topcoursescategories'
import Courses from "../Courses"


function index() {
  return (
        <div className='my-course'>
            <Courses/>
            <Topcoursescategories/>
        </div>
  )
}

export default index
