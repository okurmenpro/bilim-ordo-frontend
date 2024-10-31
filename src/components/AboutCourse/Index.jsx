import React from 'react'
import "./AboutCourse.css"

function AboutCourse() {
    return (
        <div>
            <div className='registration__course container'>
                <input className='input__registration__course' type="text" placeholder='Тип курса' />
                <input className='input__registration__course' type="text" placeholder='О курсе' />
                <input className='input__registration__course' type="text" placeholder='Авторы' />
            </div>
        </div>
    )
}

export default AboutCourse
