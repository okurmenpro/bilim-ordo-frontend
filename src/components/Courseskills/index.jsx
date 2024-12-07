import React from 'react';
import "./Courseskills.css";
import { skillsData } from '../../data/Courseskills';

function Skills() {
  return (
    <div className='skill container'>
      <div className="Course-skills">
        <div className="skills-container">
          {skillsData.map((skill) => (
            <div className="skills" key={skill.id}>
              <h1>{skill.name}</h1>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
