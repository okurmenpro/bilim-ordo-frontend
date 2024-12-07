import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  MdMenu,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdLanguage,
} from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { GrSearch } from "react-icons/gr";
import categories from "../../data/Header"; 
import "./Header.scss";
import { CartContext } from "../../context/CartContext";
import Dropdown from "../Dropdown";

function Header() {
  const { cartItems } = useContext(CartContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setSelectedCategory(null);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleMenuScroll = (e) => {
    const target = e.target;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
      target.scrollTop = target.scrollHeight - target.clientHeight;
    }
  };

  return (
    <div className="aback">
      <header className="head container">
        <MdMenu className="burger-menu" onClick={toggleMenu} />
        <div className="logo">
          <NavLink to="/">
            <h2 className="bilim">
              <span className="B">B</span>ILIM-ORDO
            </h2>
          </NavLink>
        </div>

        <Dropdown id="dropdowns" />

        <div id="search">
          <div className="input-group-append">
            <button className="button-search">
              <GrSearch className="search-icon" />
            </button>
          </div>
          <input
            placeholder="Search courses"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="teacher-page">
          <NavLink to={"/teacherpage"}>
            <p>Teach on Bilim Ordo</p>
          </NavLink>
        </div>

        <NavLink to="/basket">
          <div className="icon">
            <IoCartOutline className="icon__image" />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </div>
        </NavLink>

        <div className="buttons">
          <NavLink to="/login">
            <button className="login">Login</button>{" "}
            {/* "Войти" changed to "Login" */}
          </NavLink>
          <NavLink to="/signup">
            <button className="sign-up">Sign Up</button>{" "}
            {/* "Зарегистрироваться" changed to "Sign Up" */}
          </NavLink>
        </div>
      </header>

      <div
        className={`side-menu ${isMenuOpen ? "open" : ""}`}
        onScroll={handleMenuScroll}
      >
        <button className="close-menu" onClick={handleCloseMenu}>
          X
        </button>

        {selectedCategory ? (
          <div className="subcategory-menu">
            <div className="back-button-container">
              <MdKeyboardArrowLeft
                className="back-arrow"
                onClick={() => setSelectedCategory(null)}
              />
              <span
                className="menu-text"
                onClick={() => setSelectedCategory(null)}
              >
                Menu
              </span>{" "}
              {/* "Меню" changed to "Menu" */}
            </div>
            <ul>
              {categories[selectedCategory].map((sub) => (
                <li key={sub} className="subcategory-item">
                  {sub}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="menu-options">
            <div className="close-place">
              <NavLink to="/login" className="sidebar-link">
                Login
              </NavLink>{" "}
              {/* "Войти" changed to "Login" */}
              <div className="close-icon-container" onClick={toggleMenu}></div>
            </div>
            <div className="divider" />
            <NavLink to="/signup" className="sidebar-link">
              Sign Up
            </NavLink>{" "}
            {/* "Регистрация" changed to "Sign Up" */}
            <div className="lines" />
            <div className="popular-categories">
              <h3>Most Popular</h3>{" "}
              {/* "Самые популярные" changed to "Most Popular" */}
              <div className="category-list">
                {Object.keys(categories).map((category) => (
                  <div
                    className="category-item"
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category} <MdKeyboardArrowRight className="arrow-icon" />
                  </div>
                ))}
              </div>
              <div className="lines" />
              <h3>Other Udemy Offers</h3>{" "}
              {/* "Другие предложения Udemy" changed to "Other Udemy Offers" */}
              <h4>Bilim Ordo Business</h4>
              <h4>Download App</h4>{" "}
              {/* "Скачать приложение" changed to "Download App" */}
              <h4>Invite Friends</h4>{" "}
              {/* "Пригласить друзей" changed to "Invite Friends" */}
              <h4>Help & Support</h4>{" "}
              {/* "Справка и поддержка" changed to "Help & Support" */}
              <div className="buttonLanguage">
                <MdLanguage className="language-icon" />
                <button>English</button>{" "}
                {/* "Русский" changed to "English" */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
