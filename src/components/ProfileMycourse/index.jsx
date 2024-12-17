import React from 'react'
import "./ProfileMycourse.scss"
import Topcoursescategories from '../Topcoursescategories'
import Filter from "../Filter"
import { topcourse } from '../../data/Topcourse';

function index() {

  return (
    <div className='my-course'>
      <Filter name="Courses" count={topcourse.length} />
      <Topcoursescategories />
    </div>
  )
}

export default index
