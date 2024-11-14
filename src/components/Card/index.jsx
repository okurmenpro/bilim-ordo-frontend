import React, { useEffect, useRef } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useCourses } from "../../context/CoursContextProvider";
import CardContainer from "../CardContainer";
import "./Card.css";

function Card() {
  const { getCourses, courses } = useCourses();
  const scrollRef = useRef(null);

  useEffect(() => {
    console.log(courses); // проверка
  }, [courses]);

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
    <div className="card-container">
      <button onClick={scrollLeft} className="scroll-button left">
        <IoIosArrowDropleftCircle size={30} />
      </button>
      <div className="flex" ref={scrollRef}>
        {Array.isArray(courses) &&
          courses.map((course) => (
            <CardContainer key={course.id} name={course.name} id={course.id} />
          ))}
      </div>
      <button onClick={scrollRight} className="scroll-button right">
        <IoIosArrowDroprightCircle size={30} />
      </button>
    </div>
  );
}

export default Card;
