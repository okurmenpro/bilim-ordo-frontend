import React from 'react';
import "./Course.scss";
import star from "../../assets/svg/star.svg";
import { datacourse } from '../../data/Datacourse';

function Course() {
  return (
    <div className='course'>
      <h3>Студенты так же покупают</h3>

      <div className='display'>
        {datacourse.map((course) => (
          <div className='incourse' key={course.id}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.author}</p>

            <div className='inbox'>
              {[...Array(5)].map((_, i) => (
                <img key={i} src={star} alt="Звезда" />
              ))}
              <p>{course.rating} отзыв</p>
            </div>

            <div className='inbox2'>
              <h4>{course.currentPrice}</h4>
              <h4 className='originalPrice'>{course.originalPrice}</h4>
            </div>

            <button>Добавить в корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
