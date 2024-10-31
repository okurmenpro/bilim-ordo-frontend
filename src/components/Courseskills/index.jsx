import React from 'react';
import "./Courseskills.css";
import { IoMdCheckmark } from "react-icons/io";
import { skillsData } from '../../data/Courseskills';



function Skills() {
 
  return (
    <div className='skill container'>
      <div className="Course-skills ">
        <h2>Чему вы научитесь</h2>

        <div className="skills-container">
          {skillsData.map((skill) => (
            <div className="skills" key={skill.id}>
              <IoMdCheckmark />
              <p>{skill.text}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Skills;