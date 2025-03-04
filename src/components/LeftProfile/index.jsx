import React, { useEffect, useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import "./LeftProfile.scss";
import { NavLink, useNavigate } from "react-router-dom";

const LeftProfile = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function logOut() {
    localStorage.removeItem("user");
    Navigate("/");
    window.location.reload();
  }

  return (
    <div className="left-profile">
      {user ? <div className="avatar-profile">{user.username[0].toUpperCase()}</div> : <img src='' alt="Profile Avatar" />}
      {user ? <h3>{user.username}</h3> : <h3>Guest</h3>}
      <button className="share-profile">
        Share Profile
        <IoShareSocialOutline className="share-icon" />
      </button>
      <hr />
      <div className="profile-btns">
        <NavLink to="/profile/">
          <button>Profile</button>
        </NavLink>
        <NavLink to="/profile/mycourse" style={{ color: "black" }}>
          <button>My Courses</button>
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
        <button className="end-button" onClick={logOut}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default LeftProfile;