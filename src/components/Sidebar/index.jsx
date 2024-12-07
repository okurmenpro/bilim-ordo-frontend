import React from 'react'
import "./Sidebar.css"
import { SidebarData } from '../../data/Sidebar';
import video from "../../assets/video/Python3.mp4";
import facebook from "../../assets/svg/facebook.svg"
import { GrGithub as Github } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import microsoft from "../../assets/svg/microsoft.svg"

function Sidebar() {
    return (
        <div className='container'>
            <div className='container1 Sidebar'>
                <div className='video'>
                    <video src={video} controls></video>
                </div>

                <div className='list5'>
                    <div className='price1'>
                        <div className="price-value">${SidebarData.price}</div>
                        <div className='original-price'>${SidebarData.originalPrice}</div>
                        <div className='discount-div'>{SidebarData.discount}% Off</div>
                    </div>

                    <button className='add-btn'>Add To Cart</button>

                    <button className='buy_now-btn'>Buy Now</button>
                </div>

                <div className='title'>{SidebarData.name}</div>

                <div className="iconka">
                    <img className="facebok2" src={facebook} alt="icon facebok" />
                    <Github className="icons2" />
                    <FcGoogle className="icons2" />
                    <FaXTwitter className="icons2" />
                    <img className='microsoft2' src={microsoft} alt="icon microsoft" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
