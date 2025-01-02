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
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);

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
          <NavLink to={"/teaching"}>
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

        {user ? (
          <NavLink to={"/profile"}>
            <div className="user">{userData.username[0].toUpperCase()}</div>
          </NavLink>
        ) : (
          <div className="buttons">
            <NavLink to="/login">
              <button className="login">Login</button>{" "}
            </NavLink>
            <NavLink to="/signup">
              <button className="sign-up">SignUp</button>{" "}
            </NavLink>
          </div>
        )}
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
              <div className="close-icon-container" onClick={toggleMenu}></div>
            </div>
            <div className="divider" />
            <NavLink to="/signup" className="sidebar-link">
              Sign Up
            </NavLink>{" "}
            <div className="lines" />
            <div className="popular-categories">
              <h3>Most Popular</h3>{" "}
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
              <h4>Bilim Ordo Business</h4>
              <h4>Download App</h4>{" "}
              <h4>Invite Friends</h4>{" "}
              <h4>Help & Support</h4>{" "}
              <div className="buttonLanguage">
                <MdLanguage className="language-icon" />
                <button>English</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
