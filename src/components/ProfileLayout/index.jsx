import React from "react";
import { Outlet } from "react-router-dom";
import LeftProfile from "../LeftProfile";

function ProfileLayout() {
  return (
    <div style={{ display: "flex" }} className="container">
      <LeftProfile />
      <Outlet />
    </div>
  );
}

export default ProfileLayout;
