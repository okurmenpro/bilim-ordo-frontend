import React, { useState } from 'react';
import './CourseCompletion.scss';
import arrow from '../../assets/images/DownArrows.png';
import videos from '../../assets/images/icon/Icon.png'

const CourseCompletion = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showText, setShowText] = useState(false);
  const [buttonText, setButtonText] = useState(null);

  const courseSections = [
    {
      title: 'Introduction to UX Design',
      items: [
        '1.What is User Experience (UX) Design?',
        '2.Historical Overview of UX Design',
        '3.Understanding User-Centered Design',
        '4.The Role of UX Design in Digital Products',
        '5.Introduction to UX Design Tools and Techniques',
      ],
    },
    {
      title: 'Basics of User-Centered Design',
      items: [
        '1.What is User Experience (UX) Design?',
        '2.Historical Overview of UX Design',
        '3.Understanding User-Centered Design',
        '4.The Role of UX Design in Digital Products',
        '5.Introduction to UX Design Tools and Techniques',
      ],
    },
    {
      title: 'Elements of User Experience',
      items: [
        '1.What is User Experience (UX) Design?',
        '2.Historical Overview of UX Design',
        '3.Understanding User-Centered Design',
        '4.The Role of UX Design in Digital Products',
        '5.Introduction to UX Design Tools and Techniques',
      ],
    },
    {
      title: 'Visual Design Principles',
      items: [
        '1.What is User Experience (UX) Design?',
        '2.Historical Overview of UX Design',
        '3.Understanding User-Centered Design',
        '4.The Role of UX Design in Digital Products',
        '5.Introduction to UX Design Tools and Techniques',
      ],
    },
  ];

  const handleSectionClick = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const handleCheckboxClick = (sectionIndex, itemIndex) => {
    setSelectedItem({ sectionIndex, itemIndex });
    setButtonText(courseSections[sectionIndex].items[itemIndex]);
  };

  const handleButtonClick = () => {
    setShowText(true);
  };

  return (

    <div className="course-completion-1">
       <div className='box-1'>
       <p className='completion'>Course Completion</p>
       </div>
      <div className="section-container">
        {/* Первый контейнер */}
        <div className="section">
          <div
            className="section-header"
            onClick={() => handleSectionClick(0)}
          >
            <img  src={arrow} alt="Arrow Icon" className="icon-arrow" />
            <h3>{courseSections[0].title}</h3>
          </div>
          {expandedSection === 0 && (
            <div className="section-items">
              {courseSections[0].items.map((item, itemIndex) => (
                <div key={itemIndex} className="item">
                  <input
                    type="checkbox"
                    id={`item-0-${itemIndex}`}
                    onChange={() => handleCheckboxClick(0, itemIndex)}
                    />
                  <label htmlFor={`item-0-${itemIndex}`}>{item}</label>
                  <div className="item-info">
                    <img src={videos} alt="Video Icon" className="icon-video" />
                    <span className="time">4min</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Второй контейнер */}
        <div className="section">
          <div
            className="section-header"
            onClick={() => handleSectionClick(1)}
          >
            <img src={arrow} alt="Arrow Icon" className="icon-arrow" />
            <h3>{courseSections[1].title}</h3>
          </div>
          {expandedSection === 1 && (
            <div className="section-items">
              {courseSections[1].items.map((item, itemIndex) => (
                <div key={itemIndex} className="item">
                  <input
                    type="checkbox"
                    id={`item-1-${itemIndex}`}
                    onChange={() => handleCheckboxClick(1, itemIndex)}
                  />
                  <label htmlFor={`item-1-${itemIndex}`}>{item}</label>
                  <div className="item-info">
                      <img src={videos}alt="Video Icon" className="icon-video" />
                    <span className="time">4min</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Третий контейнер */}
        <div className="section">
          <div
            className="section-header"
            onClick={() => handleSectionClick(2)}
            >
            <img src={arrow} alt="Arrow Icon" className="icon-arrow" />
            <h3>{courseSections[2].title}</h3>
          </div>
          {expandedSection === 2 && (
            <div className="section-items">
              {courseSections[2].items.map((item, itemIndex) => (
                <div key={itemIndex} className="item">
                  <input
                    type="checkbox"
                    id={`item-2-${itemIndex}`}
                    onChange={() => handleCheckboxClick(2, itemIndex)}
                  />
                  <label htmlFor={`item-2-${itemIndex}`}>{item}</label>
                  <div className="item-info">
                    <img src={videos} alt="Video Icon" className="icon-video" />
                    <span className="time">4min</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Четвертый контейнер */}
        <div className="section">
          <div
            className="section-header"
            onClick={() => handleSectionClick(3)}
          >
            <img src={arrow} alt="Arrow Icon" className="icon-arrow" />
            <h3>{courseSections[3].title}</h3>
          </div>
          {expandedSection === 3 && (
            <div className="section-items">
              {courseSections[3].items.map((item, itemIndex) => (
                <div key={itemIndex} className="item">
                  <input
                    type="checkbox"
                    id={`item-3-${itemIndex}`}
                    onChange={() => handleCheckboxClick(3, itemIndex)}
                  />
                  <label htmlFor={`item-3-${itemIndex}`}>{item}</label>
                  <div className="item-info">
                    <img src={videos} alt="Video Icon" className="icon-video" />
                    <span className="time">4min</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>      
     </div>
  );
};

export default CourseCompletion;
