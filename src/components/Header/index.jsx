import { React, useContext, useEffect, useState } from "react";
import "./Header.scss";
import cart from '../../assets/svg/cart.svg'
import { GrSearch } from "react-icons/gr";
import Dropdown from '../Dropdown/Index'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../CartContext'

function Header() {
  const { cartItems } = useContext(CartContext);
  const [inputWidth] = useState("200px");
  return (
    <div className="aback">
        <header className="head">
          <div>
            <NavLink to="/">
              <h2>
                <a href="">B</a>ILIM-ORDO
              </h2>
            </NavLink>
          </div>
          <Dropdown id="dropdowns" />
          <div id="search">
            <div className="input-group mb-3">
              <input
                className="form-control"
                placeholder="Search"
                style={{ width: inputWidth }}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary">
                  <GrSearch />
                </button>
              </div>
            </div>
          </div>
          <NavLink to='/basket'>
            <div className="icon">
              <img className="icon__image" src={cart} alt="Cart" />
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </div>
          </NavLink>
          <div className="buttons">
            <button className="login">Войти</button>
            <NavLink to="/signup">
              <button className="sign-up">Зарегистрироваться</button>
            </NavLink>
          </div>
        </header>
      </div>
  );
}
export default Header;
