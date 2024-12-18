import React, { useState } from "react";
import "./CourseMaterials.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { materials } from "../../data/material";
import { IoDocumentOutline } from "react-icons/io5";

function CouserMaterials() {
  const [visibleSections, setVisibleSections] = useState({});

  const toggleSectionVisibility = (index) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="materials container">
      <h2>Syllabus</h2>

      <div className="materials__div">
        {materials.map((x, index) => (
          <div key={index}>
            <div className="div__mini">
              <div className="mini__img">
                <button onClick={() => toggleSectionVisibility(index)}>
                  <MdKeyboardArrowDown className="ArrowDown" />
                </button>
                <h3>{x.title}</h3>
              </div>
              <h6>{x.lesson}</h6>
            </div>

            {visibleSections[index] && (
              <div className="div__mini">
                <div className="mini__img">
                  <button className="document">
                    <IoDocumentOutline />
                  </button>
                  <p>Скачать исходный код</p>
                </div>
                <p>00:04</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CouserMaterials;
