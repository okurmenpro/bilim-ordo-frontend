import React from 'react';
import "./Courses.css";
import { MdOutlineStarPurple500 } from "react-icons/md";



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
      title: "Полное руководство по Python 3: от новичка до специалиста",
      price: 13.99,
      oldPrice: 74.99,
      description: "Изучи Python 3 с нуля - один из самых популярных языков программирования в мире + Введение в SQL и PostgreSQL",
      author: "Илья Фофанов, DevSchool Progressive Training Solutions",
      rating: 4.7,
      reviews: 9888,
      totalHours: "Всего 39ч 217 лекций. Начальный",
    },
    
  ];
  return (
    <div>
      {coursesData.map(course => (
        <div key={course.id} className='courses'>
          <div className='courses-left'>
            <img src={course.image} alt={course.title} />
          </div>
          <div className='courses-right'>
            <div className='courses-h1'>
              <h1>{course.title}</h1>
              <h3>{course.price}$</h3>
            </div>

            <div className='courses-p'>
              <p>{course.description}</p>
              <h3>{course.oldPrice}$</h3>
            </div>

            <div className='courses-3text'>
              <h4>{course.author}</h4>
              <div className='courses-flex'>
                <h3>{course.rating}</h3>
                {[...Array(Math.floor(course.rating))].map((_, index) => (
                  <MdOutlineStarPurple500 key={index} className='star-5' />
                ))}
                <p>({course.reviews})</p>
              </div>
              <h5>{course.totalHours}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courses;
