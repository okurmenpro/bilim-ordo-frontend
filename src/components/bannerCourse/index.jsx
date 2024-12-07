import React from 'react'
import "./BannerCourse.css"
import { GrLanguage } from "react-icons/gr";
import { FaRegStar as Star } from "react-icons/fa";
import { BsExclamationOctagon } from "react-icons/bs";  
import autor from "../../assets/images/autor.png"

function Banner() {
    return (
        <div className='course__banner'>

            <div className='inbanner container'>
            <h1>Introduction to User Experience Design</h1>
            <p>This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape.</p>
            <div className='banner__rating'>
                <div className='banner__star'>
                    4.6
                    <button><Star /></button>
                    <button><Star /></button>
                    <button><Star /></button>
                    <button><Star /></button>
                    <button><Star /></button>
                </div>
                <h5>(651651 rating)</h5>
                <p>22 Total Hours. 155 Lectures. All levels</p>
            </div>

            <div className='autor'>
                <img src={autor} alt="" />
                <strong>Created by Ronal Richards</strong>
            </div>

            <div className='course__update'>
                <div className='incourse'></div>
                <button><GrLanguage /></button>
                <strong>English, Kyrgyz, Russian</strong>
            </div>
            </div>
        </div>
    )
}

export default Banner
