import React from 'react';
import "./Pythonskills.css";
import { IoMdCheckmark } from "react-icons/io";



function Pythonskills() {
  const skillsData = [
    { id: 1, text: "Писать простые программы на Python 3" },
    { id: 2, text: "Как писать простые игры типа крестиков-ноликов" },
    { id: 3, text: "Логика с условиями и циклами" },
    { id: 4, text: "Объектно-ориентированное программирование на Python" },
    { id: 5, text: "Использование Jupyter Notebook" },
    { id: 6, text: "Использование коллекций в Python: списки, словари и так далее" },
    { id: 7, text: "Декораторы" },
    { id: 8, text: "Неизменяемые объекты" }
  ];
  return (
    <div>
      <div className="Pythonskills">
        <h1>Чему вы научитесь</h1>

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

export default Pythonskills;
