import React, {useContext} from 'react';
import "./Container.css"
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { CartContext } from "../CartContext";

function ContainerCart() {
  const { addToCart, cartItems } = useContext(CartContext);


  const data = [
    { 
      name: "Python разработка - с нуля до профессионала. Python 3", 
      price: "74,99$", 
      img: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/643ee30a82b8.jpg" 
    },
    { 
      name: "Python - Полный Курс по Python, Django, Data Science", 
      price: "74,99$", 
      img: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/643ee30a82b8.jpg"
    },
    { 
      name: "Data Science и Machine Learning на Python 3 с нуля", 
      price: "69,99$", 
      img: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/643ee30a82b8.jpg" 
    },
  ]
  return (
    <div className='cart-1 container'>
      <h1 style={{marginRight: "800px", fontWeight: "700", fontSize: "30px"}}>Учащиеся смотрят</h1> 

      <div>
      <div className="flex container">
        {data.map((item, index) => (
          <div key={index} className="cart">

            <img src={item.img} alt={item.name} />
            <h1>{item.name}</h1>
            <h4>Юрий Аллахвердов</h4>
            <div className="cart-flex">
              <h2>4,3</h2>
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <p>(3 3316)</p>
            </div>
            <div className="cart-top">
              <h3>{item.price}</h3>
            </div>

            <button 
              onClick={() => addToCart(item)(item)}  
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default ContainerCart;
