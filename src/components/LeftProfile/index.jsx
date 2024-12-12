import React from "react";
import { ProfileData } from "../../data/Profile";
import { IoShareSocialOutline } from "react-icons/io5";
import "./LeftProfile.scss"
import { NavLink } from 'react-router-dom';


const LeftProfile = () => {
    return (
        <div class="left-profile">
            <img src={ProfileData.img} alt="" />
            <h3>{ProfileData.name}</h3>
            <button class="share-profile">Share Profile
                <IoShareSocialOutline className='share-icon' />
            </button>
            <hr />
            <div class="profile-btns">

                <NavLink to="uploadingphoto">
                    <button>Profile</button>
                </NavLink>
                <NavLink to='/profile/mycourse' style={{ color: "black" }}>
                    <button style={{ color: "black", }}>
                        My Courses
                    </button>
                </NavLink>
                <NavLink to={"/profile/teachers"}>
                    <button>Teachers</button>
                </NavLink>
                <NavLink to={"/profile/message"}>
                <button>Message</button>
                </NavLink>
                
                <NavLink to="reviews">
                    <button>My Reviews</button>
                </NavLink>
            </div>
        </div>
    )
}


export default LeftProfile;
