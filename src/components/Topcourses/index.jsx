import React, { useState, useEffect, useRef, useContext } from "react";
import "./Topcourse.scss";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function TopCourses() {
  const scrollRef = useRef(null);
  const [topcourses, setTopCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, cartItems } = useContext(CartContext);

  const getcourse = async () => {
    try {
      const response = await fetch("http://34.93.66.214/api/product_list/");
      const data = await response.json();
      const updatedData = data.map((item) => ({
        ...item,
        image: `http://34.93.66.214${item.images}`,
      }));
      setTopCourse(updatedData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getcourse();
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const handleAddToCart = (item) => {
    const isAlreadyInCart = cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (!isAlreadyInCart) {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.image,
      });
    }
  };

  return (
    <div className="topcourses container">
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div className="beginners" ref={scrollRef}>
          <button onClick={scrollLeft} className="scroll-button2 left9">
            <IoIosArrowDropleftCircle size={30} className="icon-scroll" />
          </button>

          {topcourses.map((course) => {
            const isInCart = cartItems.some(
              (cartItem) => cartItem.id === course.id
            );

            return (
              <div className="design" key={course.id}>
                <Link to={`/course/${course.id}`}>
                  <img src={course.image} alt={course.name} />
                  <div className="design1">
                    <h2>{course.name}</h2>
                    <p>{course.description}</p>
                    <p className="price1">{course.price} $</p>
                  </div>
                </Link>
                <button
                  onClick={() => handleAddToCart(course)}
                  className="add-to-cart-button"
                  disabled={isInCart}
                >
                  {isInCart ? "В корзине" : "Добавить в корзину"}
                </button>
              </div>
            );
          })}

          <button onClick={scrollRight} className="scroll-button2 right9">
            <IoIosArrowDroprightCircle size={30} className="icon-scroll" />
          </button>
        </div>
      )}
    </div>
  );
}

export default TopCourses;
