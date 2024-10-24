import React from 'react';
import "./Courses.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function Courses() {
  const coursesData = [
    {
      id: 1,
      image: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/3cfbe3220824.jpg",
      title: "Полное руководство по Python 3: от новичка до специалиста",
      price: 13.99,
      oldPrice: 74.99,
      description: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире + Введение в SQL и PostgreSQL",
      author: "Илья Фофанов, DevSchool Progressive Training Solutions",
      rating: 4.7,
      reviews: 9888,
      totalHours: "Всего 39ч 217 лекций. Начальный",
    },
    {
      id: 2,
      image: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/3cfbe3220824.jpg",
      title: "Полное руководство по Java: от новичка до профессионала",
      price: 15.99,
      oldPrice: 79.99,
      description: "Научитесь программировать на Java с нуля и создавайте свои приложения.",
      author: "Алексей Петров, DevSchool Progressive Training Solutions",
      rating: 4.8,
      reviews: 7455,
      totalHours: "Всего 45ч 230 лекций. Начальный",
    },
    {
      id: 3,
      image: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/3cfbe3220824.jpg",
      title: "Полное руководство по JavaScript: от новичка до специалиста",
      price: 12.99,
      oldPrice: 69.99,
      description: "Изучите JavaScript и создавайте интерактивные веб-приложения.",
      author: "Мария Сидорова, DevSchool Progressive Training Solutions",
      rating: 4.6,
      reviews: 5643,
      totalHours: "Всего 40ч 200 лекций. Начальный",
    },
  ];

  return (
    <NavLink to="/course">
      <div className="courses-container">
        {coursesData.map(course => (
          <div key={course.id} className='courses'>
            <div className='courses-left'>
              <img src={course.image} alt={course.title} />
            </div>
            <div className='courses-right'>
              <div className='courses-h1'>
                <h2>{course.title}</h2>
                <p>{course.price}$</p>
              </div>

              <div className='courses-p'>
                <p>{course.description}</p>
                <h3>{course.oldPrice}$</h3>
              </div>

              <div className='courses-3text'>
                <p className='author'>{course.author}</p>
                <div className='courses-flex'>
                  <h3>{course.rating}</h3>
                  {[...Array(Math.floor(course.rating))].map((_, index) => (
                    <MdOutlineStarPurple500 key={index} className='star-5' />
                  ))}
                  <p>({course.reviews})</p>
                </div>
                <p>{course.totalHours}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </NavLink>
  );
}

export default Courses;
