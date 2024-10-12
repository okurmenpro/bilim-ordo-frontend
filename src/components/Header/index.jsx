import React, { useContext } from "react";
import "./Header.scss";
import udemy from "../../assets/images/udemy.png";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { GrCart } from "react-icons/gr";
import wold from "../../assets/svg/wold.svg";
import DropdownMenu from "../Dropdown/Index";

function Header() {
  const { cartItems } = useContext(CartContext);
  const providers = ['Udemy Business', 'Преподавайте на Udemy', 'Мое обучение'];

  return (
    <header>
      <div className="he">
        <div className="container header">
          <img src={udemy} alt="" />
          <DropdownMenu />
          <input type="search" placeholder="Ищите что угодно" />
          <div className='providers'>
            <Link to={"/"}>
              {providers.map((provider, index) => (
                <Link to='#' key={index}>{provider}</Link>
              ))}
            </Link>

            <Link to={"/basket"}>
              <div className="cart-icon">
                <GrCart className="cartIcon" />
                <span className="cart-count">{cartItems.length > 0 ? cartItems.length : ''}</span>
              </div>
            </Link>
            <div className="icon">
              <img className='not' src={wold} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='bottom container'>
      </div>
    </header>
  );
}

export default Header;
