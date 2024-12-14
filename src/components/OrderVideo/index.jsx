import React from "react";
import "./OrderStyle.scss";
import videos from "../../assets/video/Python3.mp4";

function OrderVideo() {
  return (
    <div className="boxes-comlete-page container">
      <h1>Introduction to User Experience Design </h1>
      <video className="Complete-order-videos" src={videos} controls></video>
    </div>
  );
}

export default OrderVideo;
