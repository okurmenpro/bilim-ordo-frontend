import React from 'react';
import "./Header.scss";
import udemy from "../../assets/images/udemy.png";
import heart from "../../assets/svg/heart.svg";
import korzina from "../../assets/svg/korzina.svg";
import notif from "../../assets/svg/notif.svg";
import DropdownMenu from '../DropdownMenu/DropdownMenu'


function Header() {
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

      {/* {categories.map((category) => <li>{category}</li>)}  */}


        {categories.map((category) => <li>{category}</li>)}

      </div>
    </header>
  );
}

export default Header;
