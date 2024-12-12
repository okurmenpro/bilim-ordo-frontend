import React from "react";
import "./Reviews.scss";
import { HiOutlineDotsHorizontal as Dots } from "react-icons/hi";
import { MdOutlineStarPurple500 } from "react-icons/md";
import left from "../../assets/svg/left.svg";
import rigth from "../../assets/svg/rigth.svg";

function Reviews() {
  return (
    <div className="reviews">
      <h4>Reviews (12)</h4>
      <div className="beginners">
        <div className="dots">
          <div className="span5">
            <span className="course-name">Course Name:</span>
            <h5>Beginner’s Guide to Design</h5>
          </div>
          <Dots />
        </div>
        <div className="purple">
          <span className="rev">Rating:</span>
          <div className="line-ratings">
            {[...Array(5)].map((_, index) => (
              <MdOutlineStarPurple500 className="linestart" key={index} />
            ))}
          </div>
        </div>
        <div className="purple">
          <span className="rev">Rating:</span>
          <div className="initial">
            I was initially apprehensive, having no prior design experience. But
            the instructor, John Doe, did an amazing job of breaking down
            complex concepts into easily digestible modules. The video lectures
            were engaging, and the real-world examples really helped solidify my
            understanding.
          </div>
        </div>
      </div>
      <div className="beginners">
        <div className="dots">
          <div className="span5">
            <span className="course-name">Course Name:</span>
            <h5>Beginner’s Guide to Design</h5>
          </div>
          <Dots />
        </div>
        <div className="purple">
          <span className="rev">Rating:</span>
          <div className="line-ratings">
            {[...Array(5)].map((_, index) => (
              <MdOutlineStarPurple500 className="linestart" key={index} />
            ))}
          </div>
        </div>
        <div className="purple">
          <span className="rev">Rating:</span>
          <div className="initial">
            I was initially apprehensive, having no prior design experience. But
            the instructor, John Doe, did an amazing job of breaking down
            complex concepts into easily digestible modules. The video lectures
            were engaging, and the real-world examples really helped solidify my
            understanding.
          </div>
        </div>
      </div>
      <div className="beginners">
        <div className="dots">
          <div className="span5">
            <span className="course-name">Course Name:</span>
            <h5>Beginner’s Guide to Design</h5>
          </div>
          <Dots />
        </div>
        <div className="purple">
          <span className="rev">Rating:</span>
          <div className="line-ratings">
            {[...Array(5)].map((_, index) => (
              <MdOutlineStarPurple500 className="linestart" key={index} />
            ))}
          </div>
        </div>
        <div className="purple">
          <span className="rev">Rating:</span>
          <div className="initial">
            I was initially apprehensive, having no prior design experience. But
            the instructor, John Doe, did an amazing job of breaking down
            complex concepts into easily digestible modules. The video lectures
            were engaging, and the real-world examples really helped solidify my
            understanding.
          </div>
        </div>
      </div>
      <div className="left-rigth-button">
        <button className="left">
          <img src={left} alt="" />
        </button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="rigth">
          <img src={rigth} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Reviews;
