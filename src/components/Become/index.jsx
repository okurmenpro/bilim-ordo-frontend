import React from "react";
import "./become.scss";
import become from "../../assets/images/become.png";
import become2 from "../../assets/images/become2.png";
import { RiArrowRightLine } from "react-icons/ri";

function index() {
  return (
    <div className="become container">
      <div className="become-top">
        <img src={become} alt="" />
        <div className="top">
          <h4>Become an Instructor</h4>
          <span>
            Instructors from around the world teach millions of students on
            Byway. We provide the tools and skills to teach what you love.
          </span>
          <button>
            Label <RiArrowRightLine className="icon" />
          </button>
        </div>
      </div>
      <div className="become-bottom">
        <div className="bottom">
          <h4>Transform your life through education</h4>
          <span>
            Learners around the world are launching new careers, advancing in
            their fields, and enriching their lives.
          </span>
          <button>
            Label <RiArrowRightLine className="icon" />
          </button>
        </div>
        <img src={become2} alt="" />
      </div>
    </div>
  );
}

export default index;
