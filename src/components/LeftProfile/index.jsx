import React from "react";
import { ProfileData } from "../../data/Profile";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./LeftProfile.scss";

const LeftProfile = () => {
  return (
    <div class="left-profile">
      <img src={ProfileData.img} alt="" />
      <h3>{ProfileData.name}</h3>
      <button class="share-profile">
        Share Profile
        <IoShareSocialOutline className="share-icon" />
      </button>
      <hr />
      <div class="profile-btns">
        <button>Profile</button>
        <button>My Courses</button>
        <button>Teachers</button>
        <button>Message</button>
        <Link to="reviews">
          <button>My Reviews</button>
        </Link>
      </div>
    </div>
  );
};

export default LeftProfile;
