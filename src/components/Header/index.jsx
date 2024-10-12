import React from "react";
import "./Header.scss";
import cart from '../../assets/svg/cart.svg'
import earth from '../../assets/svg/earth.svg'
import { GrSearch } from "react-icons/gr";
import Dropdown from '../Dropdown/Index'
import {NavLink } from 'react-router-dom';

function Header() {
  const providers = ['Udemy Business', 'Преподавайте на Udemy']
  return (
    <div className="aback">
      <header className="head ">
        <div>
          <h2><span>B</span>ILIM-ORDO</h2>
        </div>
        <Dropdown id="dropdowns" />
        <div className="buttons">
          {providers.map((provider) =>
            <button id="active-btn">{provider}</button>)}
        </div>
        <div id="search">
          <div class="input-group mb-3">
            <input class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" >
                <GrSearch />
              </button>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="login">Войти</button>
          <button className="sign-up">Зарегистрироваться</button>
        </div>
        <div className="icons">
          <NavLink to='/basket'>
            <img src={cart} alt="" />
          </NavLink>
          <img src={earth} alt="" />
        </div>
      </header>
    </div>
  );
}
export default Header;