import React from 'react'
import "./Card.css"
import { MdOutlineStarPurple500 } from "react-icons/md";

function Card(props) {
  
 const product = [
      {
        name: "Python разработка - с нуля до профессионала. Python 3",
        price: "74,99$"

      },
      {
        name: "Python - Полный Курс по Python, Django, Data Science ",
        price: "74,99$"

      },
      {
        name: "Data Science и Machine Learning на Python 3 с нуля",
        price: "69,99$"

      },
      
    ]



 



  return (
    <div>
          <div className='flex'>
            {
            product.map((item, index) => (
                <div key={index} className='cart'>
                    <img src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/643ee30a82b8.jpg" alt="" />
                    <h1>{item.name}</h1>
                    <h4>Юрiй Аллахвердов</h4>
                    <div className='cart-flex'>
                        <h2>4,3</h2>
                        <MdOutlineStarPurple500 />         
                        <MdOutlineStarPurple500 />       
                        <MdOutlineStarPurple500 />       
                        <MdOutlineStarPurple500 />       
                        <MdOutlineStarPurple500 />               
                        <p>(3 3316)</p>
                    </div>
                    <div className='cart-top'>
                        <h3>{item.price}</h3>
                    </div>
                </div>
            ))
            }
        </div>
        
    </div>
  )
}

export default Card;
