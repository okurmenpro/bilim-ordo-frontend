import React, { useState } from 'react';
import './TeacherProfile.css';
import { GoStarFill } from "react-icons/go";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

function TeacherProfile() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <section className='teacher'>
        <h1>Преподаватель</h1>
        <h2>Bogdan Stashchuk | Software Engineer, MBA, PhD</h2>
        <h3>Just keep learning - stashchuk</h3>
        <div className='aboutTeacher'>
          <img id='teach-img' src="https://img-c.udemycdn.com/user/200_H/589907_c856_17.jpg" alt="Преподаватель" />
          <div className='statistics'>
            <div className='aboutStatistic'>
              <GoStarFill />
              <strong id='strong'>4,6 рейтинг</strong>
            </div>
            <div className='aboutStatistic'>
              <VscPreview/>
              <strong>34 455 отзывов</strong>
            </div>
            <div className='aboutStatistic'>
              <IoPeopleSharp/>
              <strong>297 155 студентов</strong>
            </div>
            <div className='aboutStatistic'>
              <MdOutlineSlowMotionVideo/>
              <strong>25 курса</strong>
            </div>
          </div>
        </div>

        <p>Do you really want to understand and practice instead of sitting and watching long presentations or trying to code along without any clue what is happening behind the scenes?</p>
        <p>Join me in any of my courses and you will get real knowledge based on the deep understanding of every single topic.</p>
            <p>But who am I?</p>
            <p>My name is Bogdan Stashchuk and I teach students more than 20 years. I am working as Software Engineer and love to teach and learn myself.</p>

        {isExpanded && (
          <>
           
            <p>I have a huge experience in explaining difficult things in an easy to understand format backed up with practice activities. That is the perfect combination that enables you to really learn and retain gained knowledge for a long period of time.</p>
            <p>Let's connect in the Social Networks! All links you could find under the profile picture.</p>
            <p>See you on my courses!</p>
          </>
        )}
        <div className='toggleButton'>
        <button className="toggle-button" onClick={toggleText}>
          {isExpanded ? 'Свернуть' : 'Развернуть'}
        </button>
        <IoIosArrowDown className='arrow'/>
        </div>
      </section>
    </>
  );
}

export default TeacherProfile;
