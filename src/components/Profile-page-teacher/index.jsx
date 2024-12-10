import React from 'react'
import "./Profile-Page-Teacher.scss"
import Autors from '../../assets/images/autor.png'
import arrows from '../../assets/images/icons/Icon.png'
import arounds from '../../assets/images/icon/Icon.png'
function Profilemessageteacher() {
  return (
    <div className='Page-Containers-1'>
     <div className='Header-text-1'>
       <div className='Profile-1'>
        <img className='Arrows-1' src={arrows} alt="" />
        <img className='Autor-1' src={Autors} alt="" />
        Ronald Richards
       </div>
       <div className='menu-left-1'>
        <img src={arounds} alt="" />
       </div>
     </div>
     <hr />
      <div className='Body-text-1'>
        <div className='time-1'><p>Today</p></div>
        <div className='text-Message-1'>
                 10:25 am
            <div className='first-1'>Hello</div>
            <div className='second-2'>Just wanted to tell you that i started your course and its going great!!</div>
             </div>
            <div className='Third-3'>
                <div>
                <img src="" alt="" />
                <p>12:23 pm</p>
                </div>
                <div className='text'>
                    <p>Hello! Thank you for reaching out to me. Feel free to ask any questions regarding the course, I will try to reply ASAP</p>
                </div>
            </div>
        <div className='bottom-text'>
            <p>10:25 am</p>
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
  )
}

export default Profilemessageteacher;