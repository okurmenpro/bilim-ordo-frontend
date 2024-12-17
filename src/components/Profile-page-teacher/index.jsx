import React from 'react'
import "./Profile-Page-Teacher.scss"
import Autors from '../../assets/images/autor.png'
import arrows from '../../assets/images/icons/Icon.png'
import arounds from '../../assets/images/icon/Icon.png'
import LeftProfile from '../LeftProfile'
import { NavLink } from 'react-router-dom'
function Profilemessageteachers() {
  return (
     <div className='boxes-12'>
      <div className='Lefts-profile-1'>
      <LeftProfile />
      </div>
    <div className='Page-Containers-1'>
     <div className='Header-text-1'>
       <div className='Profile-1'>
        <NavLink to="/profile/message">
        <img className='Arrows-1' src={arrows} alt="" />
        </NavLink>
        <img className='Autor-1' src={Autors} alt="" />
        Ronald Richards
       </div>
       <div className='menu-left-1'>
        <img className='Three-circle-1' src={arounds} alt="" />
       </div>
     </div>
     <hr />
      <div className='Body-text-1'>
        <div className='time-1'><p>Today</p></div>
        <div className='text-Message-1'>

                 <p className='Times-set'>10:25 pm</p>
            <div className='first-1'>Hello</div>
            <div className='second-2'>Just wanted to tell you that i started your course and its going great!!</div>
             </div>
            <div className='Third-3'>
                <div className='text-time-1'>
                <img className='send-autors1' src={Autors} alt="" />
                <p>12:23 pm</p>
                </div>
                <div className='text'>
                    <p className='Texxt-1'>Hello! Thank you for reaching out to me. Feel free to ask any questions regarding the course, I will try to reply ASAP</p>
                </div>
            </div>
        <div className='bottom-text'>
            <p className='Times-text-2'>10:25 am</p>
            <strong>Yes Sure</strong>
        </div>
        <div></div>
      </div>
         <hr />
      <div className='Footer-text-1'>
        <input className='Texts12' type="text" placeholder='Type Your Message' />
        <button className='Btns-1'>Send</button>
      </div>
    </div>
     </div>
  )
}

export default Profilemessageteachers;