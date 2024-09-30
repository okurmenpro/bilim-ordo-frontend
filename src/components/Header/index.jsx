/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.scss";
import udemy from "../../assets/images/udemy.png";
import heart from "../../assets/svg/heart.svg";
import korzina from "../../assets/svg/korzina.svg";
import notif from "../../assets/svg/notif.svg";
import { Link } from "react-router-dom";

function Header() {
  const categories = [
    "Веб-дизайн ",
    "Графический дизайн и иллюстрация",
    "Инструменты дизайна",
    "Дизайн пользовательского интерфейса",
    "Дизайн игр",
  ];

  const providers = ["Udemy Business", "Преподавайте на Udemy", "Мое обучение"];
  return (
    <header>
      <div class="container">
        <img src={udemy} alt="" />
        <h3>Категории</h3>
        <input type="search" placeholder="Ищите что угодно" />

        <div className="providers">
          {providers.map((provider) => (
            <a href="#">{provider}</a>
          ))}
        </div>

        <div className="icons">
          <img src={heart} alt="" />
          <img src={korzina} alt="" />
          <img className="not" src={notif} alt="" />
        </div>
      </div>
      <hr />
      <div className="bottom container">
          {categories.map((category) => (
            <Link to="#">{category}</Link>
          ))}
      </div>
    </header>
  );
}

export default Header;
