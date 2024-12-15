import React from "react";
import "./Buttons.scss";

function Buttons({ scrollToSkills, scrollToExercises, scrollToMaterials, scrollToTeacher }) {
  return (
    <div className="Buttons container">
      <button onClick={scrollToSkills}>Skills</button>
      <button onClick={scrollToExercises}>Exercises</button>
      <button onClick={scrollToMaterials}>Materials</button>
      <button onClick={scrollToTeacher}>Teacher</button>
    </div>
  );
}

export default Buttons;
