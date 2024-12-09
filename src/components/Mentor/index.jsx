import React from 'react'
import "./Mentor.scss"
import mentorpng from "../../assets/images/mentor.png"

function MentorPage() {
  return (
    <div className='mentor-page container'>
            <div className='mentor-left'>
                <div className='mentor-top'>
                    <strong>Instructor</strong>
                    <h1>Ronald Richards</h1>
                    <strong>Web developer, UX/UI Designer, and Teacher</strong>

                    <div className='informetion'>
                    <div className='bottom'>
                        <span>Total Students</span>
                        <strong className='sandar'>1000</strong>
                    </div>
                    <div className='bottom'>
                        <span>Reviews</span>
                        <strong className='sandar'>154</strong>
                    </div>
                    </div>
                </div>

                <div className='mentor-main'>

                    <div>
                        <h2 className='h2text'>About Ronald Richard</h2>
                        <p>Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results.</p>
                    </div>

                    <div>
                        <h2 className='h2text'>Areas of Expertise</h2>
                        <ul className='text-category'>
                            <li>User Experience (UX) Design</li>
                            <li>User Interface (UI) Design</li>
                            <li>Information Architecture</li>
                            <li>Interaction Design</li>
                            <li>Visual Design</li>
                            <li>Usability Testing</li>
                            <li>Wireframing and Prototyping</li>
                            <li>Design Thinking</li>
                        </ul>
                    </div>

                    <div>
                        <h2  className='h2text'>Professional Experience</h2>
                        <p>Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned companies such as [Company Name] and [Company Name]. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms.</p>
                    </div>

                </div>
            </div>

            <div className='mentor-right'>
                <div className='mentor-image'>
                <img src={mentorpng} alt="" />
                </div>
                <button>Website</button>
                <button>Twitter</button>
                <button>Youtube</button>
            </div>

    </div>
  )
}

export default MentorPage
