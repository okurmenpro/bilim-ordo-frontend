import React, { useEffect, useState } from "react";
import "./Topcoursescategories.scss";
import { topcourse } from "../../data/Topcourse";
import { MdOutlineStarPurple500 } from "react-icons/md";
import downchevron from "../../assets/svg/downchevron.svg";
import left from "../../assets/svg/left.svg";
import rigth from "../../assets/svg/rigth.svg";

function Topcoursescategories() {
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
  return (
    <div>
      <div className="topcoursescategories-container">
        <div className="topcourses-grid">
          {topcourses.map((course) => (
            <div className="design" key={course.id}>
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
            </div>
          ))}
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
    </div>
  );
}

export default Topcoursescategories;
