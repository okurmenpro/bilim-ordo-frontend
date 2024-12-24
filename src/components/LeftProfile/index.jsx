import React from "react";
import { ProfileData } from "../../data/Profile";
import { IoShareSocialOutline } from "react-icons/io5";
import "./LeftProfile.scss"
import { NavLink, useNavigate } from 'react-router-dom';


const LeftProfile = () => {
    const Navigate = useNavigate();

    function logOut() {
        localStorage.removeItem("user")
        Navigate("/")
        window.location.reload();
    }
    
    return (
        <div class="left-profile">
            <img src={ProfileData.img} alt="" />
            <h3>{ProfileData.name}</h3>
            <button class="share-profile">Share Profile
                <IoShareSocialOutline className='share-icon' />
            </button>
            <hr />
            <div class="profile-btns">
                <NavLink to="/profile/">
                    <button>Profile</button>
                </NavLink>
                <NavLink to='/profile/mycourse' style={{ color: "black" }}>
                    <button>
                        My Courses
                    </button>
                </NavLink>
                <NavLink to={"teachers"}>
                    <button>Teachers</button>
                </NavLink>
                <NavLink to={"message"}>
                    <button>Message</button>
                </NavLink>

                <NavLink to="reviews">
                    <button>My Reviews</button>
                </NavLink>
                <button className="end-button" onClick={logOut}>Log Out</button>
            </div>
        </div>
    )
}


export default LeftProfile;