import React from 'react'
import "./Courses.css"
import { MdOutlineStarPurple500 } from "react-icons/md";


function Сourses() {
  return (
    <div>
      <div className='courses'>
      <div className='courses-left'>
        <img src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/3cfbe3220824.jpg" alt="пайтон" />
      </div>
      <div className='courses-right'>
        <div className='courses-h1'>
          <h1>Полное руководство по Python 3: от новичка до специалиста</h1>
          <h3>13,99$</h3>
        </div>

        <div className='courses-p'>
          <p>Изучи Python 3 с нуля - один из самых популярных языков программирования в мире + Введение в SQL и PostgreSQL</p>
          <h3>74,99$</h3>
        </div>

        <div className='courses-3text'>

      <h4>Илья Фофанов, DevSchool Progressive Training Solutions</h4>

        <div className='courses-flex'>
          <h3>4,7</h3>

          <MdOutlineStarPurple500 className='star-5' />         <MdOutlineStarPurple500 className='star-5' />       <MdOutlineStarPurple500 className='star-5' />       <MdOutlineStarPurple500 className='star-5' />       <MdOutlineStarPurple500 className='star-5' />   

          <p>(9 888)</p>
        </div>
        <h5>Всего 39ч 217 лекций. Начальный</h5>

        </div>

      </div>
      </div>
    </div>
  )
}

export default Сourses
