import React from "react";
import "./topcourses.scss";
import { MdOutlineStarPurple500 } from "react-icons/md";
import topcourses from "../../assets/images/topcourses.png";

function index() {
  return (
    <div className="topcourses container">
      <div className="topcoursesh2">
        <h2>Top Courses</h2>
        <h6>Label</h6>
      </div>

      <div className="beginners ">
        <div className="design">
          <img src={topcourses} alt="" />
          <div className="design1">
            <h2>Beginner’s Guide to Design</h2>
            <h3>By Ronald Richards</h3>
            <div className="design-icon">
              <div className="line-ratings">
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <p className="ratings">(1200 Ratings)</p>
              </div>
              <p className="ratings2">22 Total Hours. 155 Lectures. Beginner</p>
              <p className="price1">$149.9</p>
            </div>
          </div>
        </div>
        <div className="design">
          <img src={topcourses} alt="" />
          <div className="design1">
            <h2>Beginner’s Guide to Design</h2>
            <h3>By Ronald Richards</h3>
            <div className="design-icon">
              <div className="line-ratings">
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <p className="ratings">(1200 Ratings)</p>
              </div>
              <p className="ratings2">22 Total Hours. 155 Lectures. Beginner</p>
              <p className="price1">$149.9</p>
            </div>
          </div>
        </div>
        <div className="design">
          <img src={topcourses} alt="" />
          <div className="design1">
            <h2>Beginner’s Guide to Design</h2>
            <h3>By Ronald Richards</h3>
            <div className="design-icon">
              <div className="line-ratings">
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <p className="ratings">(1200 Ratings)</p>
              </div>
              <p className="ratings2">22 Total Hours. 155 Lectures. Beginner</p>
              <p className="price1">$149.9</p>
            </div>
          </div>
        </div>
        <div className="design">
          <img src={topcourses} alt="" />
          <div className="design1">
            <h2>Beginner’s Guide to Design</h2>
            <h3>By Ronald Richards</h3>
            <div className="design-icon">
              <div className="line-ratings">
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <MdOutlineStarPurple500 className="linestart" />
                <p className="ratings">(1200 Ratings)</p>
              </div>
              <p className="ratings2">22 Total Hours. 155 Lectures. Beginner</p>
              <p className="price1">$149.9</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
