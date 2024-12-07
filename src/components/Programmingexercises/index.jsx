import React from 'react'
import "./Programmingexercises.css"
import autor from "../../assets/images/autor.png"
import icon1 from "../../assets/svg/course-icon-1.svg"
import icon2 from "../../assets/svg/course-2-icon.svg"
import icon3 from "../../assets/svg/course-3-icon.svg"

function Programmingexercises() {
  return (
    <div>
      <div className='Programming-Exercises container'>

        <div className='Exercises'>
          <h2>Instructor</h2>
          <p>Ronald Richards</p>
          <span>UI/UX Designer</span>
        </div>

        <div className='block'>
          <div className='block-left'>
            <img src={autor} alt="" />
          </div>

          <div className='block-right'>
            <div className='Instructor'>
              <img src={icon1} alt="" />
              <strong>40,445 Reviews</strong>
            </div>
            <div className='Instructor'>
              <img src={icon2} alt="" />
              <strong>500 Students</strong>
            </div>
            <div className='Instructor'>
              <img src={icon3} alt="" />
              <strong>15 Courses</strong>
            </div>
          </div>
        </div>
        <p className='p'>With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and engaging user experiences.</p>
      </div>
    </div>
  )
}

export default Programmingexercises