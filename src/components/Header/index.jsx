import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdKeyboardArrowRight, MdKeyboardArrowLeft, MdLanguage } from "react-icons/md";
import cart from "../../assets/svg/cart.svg";
import { GrSearch } from "react-icons/gr";
import categories from "../../data/Header";  // Import categories from external file
import "./Header.scss";
import { CartContext } from "../../context/CartContext";
import Dropdown from "../Dropdown";

function Header() {
  const { cartItems } = useContext(CartContext);
  const [inputWidth] = useState("200px");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleMenuScroll = (e) => {
    const target = e.target;
    if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
      target.scrollTop = target.scrollHeight - target.clientHeight;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("overlay");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("overlay");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
      document.body.classList.remove("overlay");
    };
  }, [isMenuOpen]);

  return (
    <div className="aback">
      <header className="head container">
        {isMobile && <MdMenu className="burger-menu" onClick={toggleMenu} />}
        <div className="logo">
          <NavLink to="/">
            <h2 className="bilim">
              <p className="B">B</p>ILIM-ORDO
            </h2>
          </NavLink>
        </div>

        <Dropdown id="dropdowns" />

        <div id="search">
          <div className="input-group mb-3">
            <div className="input-group-append">
              <button className="button-search">
                <GrSearch className="search-icon" />
              </button>
            </div>
            <input
              className="form-control"
              placeholder="Search courses"
              style={{ width: inputWidth }}
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
          </div>
        </div>
        <div className="teacher-page">
          <NavLink to={"/teacherpage"}>
            <p>Teach on Bilim Ordo</p>
          </NavLink>
        </div>

        <NavLink to="/basket">
          <div className="icon">
            <img className="icon__image" src={cart} alt="Cart" />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </div>
        </NavLink>

        <div className="buttons">
          <NavLink to="/login">
            <button className="login">Login</button> {/* "Войти" changed to "Login" */}
          </NavLink>
          <NavLink to="/signup">
            <button className="sign-up">Sign Up</button> {/* "Зарегистрироваться" changed to "Sign Up" */}
          </NavLink>
        </div>

        {isMobile && <MdMenu className="burger-menu" onClick={toggleMenu} />}
      </header>

      <div className={`side-menu ${isMenuOpen ? "open" : ""}`} onScroll={handleMenuScroll}>
        <button className="close-menu" onClick={handleCloseMenu}>
          X
        </button>

        {selectedCategory ? (
          <div className="subcategory-menu">
            <div className="back-button-container">
              <MdKeyboardArrowLeft className="back-arrow" onClick={() => setSelectedCategory(null)} />
              <span className="menu-text" onClick={() => setSelectedCategory(null)}>
                Menu
              </span> {/* "Меню" changed to "Menu" */}
            </div>
            <ul>
              {categories[selectedCategory].map((sub) => (
                <li key={sub} className="subcategory-item">{sub}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="menu-options">
            <div className="close-place">
              <NavLink to="/login" className="sidebar-link">Login</NavLink> {/* "Войти" changed to "Login" */}
              <div className="close-icon-container" onClick={toggleMenu}></div>
            </div>

            <div className="divider" />
            <NavLink to="/signup" className="sidebar-link">Sign Up</NavLink> {/* "Регистрация" changed to "Sign Up" */}
            <div className="lines" />

            {isMobile && (
              <div className="popular-categories">
                <h3>Most Popular</h3> {/* "Самые популярные" changed to "Most Popular" */}
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

                <h3>Other Udemy Offers</h3> {/* "Другие предложения Udemy" changed to "Other Udemy Offers" */}
                <h4>Bilim Ordo Business</h4>
                <h4>Download App</h4> {/* "Скачать приложение" changed to "Download App" */}
                <h4>Invite Friends</h4> {/* "Пригласить друзей" changed to "Invite Friends" */}
                <h4>Help & Support</h4> {/* "Справка и поддержка" changed to "Help & Support" */}

                <div className="buttonLanguage">
                  <MdLanguage className="language-icon" />
                  <button>English</button> {/* "Русский" changed to "English" */}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
