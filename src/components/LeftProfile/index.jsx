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
                 <Link to="uploadingphoto">
          <button>Profile</button>
        </Link>
                <button>My Courses</button>
                <NavLink to={"/profile/teachers"}>
                    <button>Teachers</button>
                </NavLink>
                <button>Message</button>
                <Link to="reviews">
          <button>My Reviews</button>
        </Link>
            </div>
        </div>
    )
}


export default LeftProfile;
