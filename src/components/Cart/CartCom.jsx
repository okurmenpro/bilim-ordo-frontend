import React from 'react'
import "./Cart.css"
import { MdOutlineStarPurple500 } from "react-icons/md";

function CartCom() {
  return (
    <div>
        <div className='cart'>
            <img src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/643ee30a82b8.jpg" alt="" />
            <h1>Python разработка - с нуля до <br /> профессионала. Python </h1>
            <h4>Юрiй Аллахвердов</h4>
            <div className='cart-flex'>
                <h2>4,3</h2>
                <MdOutlineStarPurple500 />         <MdOutlineStarPurple500 />       <MdOutlineStarPurple500 />       <MdOutlineStarPurple500 />       <MdOutlineStarPurple500 />               <p>(3 3316)</p>
            </div>
            <div className='cart-top'>
                <h3>11,99$</h3>
                <p>77,99$</p>
            </div>
        </div>
    </div>
  )
}

export default CartCom
