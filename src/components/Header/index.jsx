import React from 'react';
import "./Header.scss";
import udemy from "../../assets/images/udemy.png";
import heart from "../../assets/svg/heart.svg";
import korzina from "../../assets/svg/korzina.svg";
import notif from "../../assets/svg/notif.svg";
import DropdownMenu from '../DropdownMenu/DropdownMenu';

import { Dropdown } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { GrCart } from "react-icons/gr";




function Header() {

  const categories = ['Category 1', 'Category 2', 'Category 3']; 

  return (
    <header>
      <div className="container">
        <img src={udemy} alt="Udemy" />
        <DropdownMenu />
        <input type="search" placeholder="Ищите что угодно" />
        <div className="providers">
          {['Udemy Business', 'Преподавайте на Udemy', 'Мое обучение'].map((provider, index) => (
            <a key={index}>{provider}</a>
          ))}
        </div>
        <div className="icons">
          <img src={heart} alt="Heart" />
          <img src={korzina} alt="Cart" />
          <img className="not" src={notif} alt="Notifications" />
        </div>
      </div>

      <div className='bottom container'>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;

