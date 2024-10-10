import React from "react";
import "./Header.scss";
import udemy from "../../assets/images/udemy.png";
import cart from '../../assets/svg/cart.svg'
import earth from '../../assets/svg/earth.svg'
import { GrSearch } from "react-icons/gr";

function Header() {
  const providers = ['Udemy Business', 'Преподавайте на Udemy']
  const authorization = ['Войти' , 'Зарегистрироваться']
  return (
    <main className="aback">
      <header className="head container">
        <img className="logo" src={udemy} alt="" />
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
          {authorization.map((auth) =>
          <button className="login">{auth}</button>)}
        </div>
        <div className="icons">
            <img src={cart} alt="" />
          <img src={earth} alt="" />
        </div>
      </header>
    </main>
  );
}
export default Header;

