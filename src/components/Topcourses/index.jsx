import React, { useState, useEffect, useRef } from "react";
import "./Topcourses.scss";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { topcourse } from "../../data/topcourse";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";

function TopCourses() {
  const scrollRef = useRef(null);

  const [topcourses, setTopCourse] = useState(topcourse);
  const getcourse = async () => {
    try {
      const response = await fetch("/topcourse");
      const data = await response.json();
      setTopCourse(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getcourse();
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="topcourses container">
      <div className="beginners" ref={scrollRef}>
        <button onClick={scrollLeft} className="scroll-button left">
          <IoIosArrowDropleftCircle size={30} className="icon-scroll" />
        </button>

        {topcourses.map((course) => (
          <div className="design" key={course.id}>
            <Link to="course">
              <img src={course.image} alt={course.title} />
              <div className="design1">
                <h2>{course.title}</h2>
                <h3>{course.author}</h3>
                <div className="design-icon">
                  <div className="line-ratings">
                    {[...Array(5)].map((_, index) => (
                      <MdOutlineStarPurple500
                        className="linestart"
                        key={index}
                      />
                    ))}
                    <p className="ratings">({course.ratings} Ratings)</p>
                  </div>
                  <p className="ratings2">
                    {course.totalHours} Total Hours. {course.lectures} Lectures.{" "}
                    {course.level}
                  </p>
                  <p className="price1">{course.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}

        <button onClick={scrollRight} className="scroll-button right">
          <IoIosArrowDroprightCircle size={30} className="icon-scroll" />
        </button>
      </div>
    </div>
  );
}

export default TopCourses;
