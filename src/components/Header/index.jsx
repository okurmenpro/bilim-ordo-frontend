import { React, useContext, useEffect, useState } from "react"; 
import "./Header.scss";
import cart from '../../assets/svg/cart.svg';
import earth from '../../assets/svg/earth.svg';
import { GrSearch } from "react-icons/gr";
import Dropdown from '../Dropdown/Index';
import { NavLink } from 'react-router-dom';
import { CartContext} from '../CartContext'
import { IoMenu } from "react-icons/io5";




function Header() {
  const providers = ['Udemy Business', 'Преподавайте на Udemy'];
  const { cartItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false); 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="aback">
      <header className="head">
        <div className="left-side">
          {isMobile && (
            <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
              <IoMenu size={25} />
            </button>
          )}
          <div className="top_header_media">
            <NavLink to="/" className="center-title">
              <h2><span>B</span>ILIM-ORDO</h2>
            </NavLink>
          </div>
        </div>
        <div className="buttons">
          <button className="login">Войти</button>

                 
          <a href='/SignUp' className="sign-up"> Зарегистрироваться</a>
   
        </div>   
        <div className="icons">
          <NavLink to="/basket">
            <img src={cart} alt="Cart" />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </NavLink>
          <img src={earth} alt="Earth" />
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          <button className="close-menu" onClick={() => setMenuOpen(false)} style={{ fontSize: '20px' }}>X</button>
          <div className="auth-links">
            <NavLink to="/login" className="auth-link">Войти</NavLink>
            <NavLink to="/register" className="auth-link">Регистрация</NavLink>
            <hr className="divider" />
          </div>
          <div className="menu-links">
            <ul>
              {providers.map((provider) => (
                <li key={provider}>
                  <NavLink to="#" className="auth-link">{provider}</NavLink>
                  <span className="arrow">→</span>
                </li>
              ))}
            </ul>

            <p className="auth-link">Присоединяйтесь к нам</p>
          </div>
          <button className="btn-russian">Русский</button>
        </div>
      )}
    </div>
  );
}

export default Header;
