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
          <NavLink to='/'>
            <h2><span>B</span>ILIM-ORDO</h2>
          </NavLink>
        </div>
        <Dropdown id="dropdowns" />
        <div id="search">
          <div class="input-group mb-3">
            <input class="form-control" placeholder="Search" style={{ width: inputWidth }} aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" >
                <GrSearch />
              </button>
            </div>
          </div>
        </div>
        <NavLink to='/basket'>
          <div className="icon">
            <img src={cart} alt="Cart" />
            {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
            )}
          </div>
          </NavLink>
        <div className="buttons">
          <button className="login">Войти</button>
          <button className="sign-up">Зарегистрироваться</button>
        </div>
      </header>
    </div>
  );
}
export default Header;