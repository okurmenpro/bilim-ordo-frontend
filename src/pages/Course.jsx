import React, { useRef } from "react";
import MaterialCourse from "../components/MaterialCourse";
import BannerCourse from "../components/BannerCourse";
import Sidebar from "../components/Sidebar";
import TeacherProfile from "../components/TeacherProfile";
import Programmingexercises from "../components/Programmingexercises/index";
import Skills from "../components/Courseskills";
import HomeReviews from "../components/HomeReviews";
import TopCourses from "../components/Topcourses";
import Buttons from "../components/CourseButtons";

function Course() {
  const skillsRef = useRef(null);
  const exercisesRef = useRef(null);
  const materialRef = useRef(null);
  const teacherRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <BannerCourse />
      <Sidebar />
      <Buttons
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToExercises={() => scrollToSection(exercisesRef)}
        scrollToMaterials={() => scrollToSection(materialRef)}
        scrollToTeacher={() => scrollToSection(teacherRef)}
      />
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={exercisesRef}>
        <Programmingexercises />
      </div>
      <div ref={materialRef}>
        <MaterialCourse />
      </div>
      <div ref={teacherRef}>
        <TeacherProfile />
      </div>
      <HomeReviews />
      <TopCourses />
    </div>
  );
}

export default Course;
