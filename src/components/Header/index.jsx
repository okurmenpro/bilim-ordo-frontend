import React, { useContext, useState, useEffect } from "react";
import "./Header.scss";
import cart from "../../assets/svg/cart.svg";
import { GrSearch } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import {
  MdMenu,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdLanguage,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CartContext } from "../CartContext";
import Dropdown from "../Dropdown/Index";

function Header() {
  const { cartItems } = useContext(CartContext);
  const [inputWidth] = useState("200px");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const categories = {
    "Веб-разработка": [
      "JavaScript",
      "React JS",
      "Angular",
      "CSS",
      "Next.js",
      "HTML",
      "ASP.NET Core",
      "Node.js",
      "WordPress",
    ],
    "Разработка мобильных приложений": [
      "Google Flutter",
      "IOS Development",
      "Android Development",
      "Dart",
      "Swift",
      "Kotlin",
      "SwiftUI",
    ],
    "Разработка игр": [
      "Unreal Engine",
      "Unity",
      "Game Development Basics",
      "C#",
      "3D Game Development",
      "Unreal Engine Blueprints",
    ],
    "Бизнес-анализ и Business Intelligence": [
      "Microsoft Power BI",
      "SQL",
      "Data Modeling",
      "Data Analysis",
      "Business Analysis",
      "Tableau",
    ],
    "ИТ-сертификация": [
      "AWS Certified Cloud Practitioner",
      "AWS Certified Solution Architect",
      "CompTIA Security+",
      "CompTIA A+",
    ],
    "Личностные изменения": [
      "Life Coaching",
      "NLP",
      "Personal Growth",
      "Sound Therapy",
      "Coaching",
      "Mindfulness",
      "CBT",
    ],
    "Графический дизайн и иллюстрация": [
      "Graphic Design",
      "Canva",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Drawing",
      "Adobe InDesign",
    ],
    "Цифровой маркетинг": [
      "Digital Marketing",
      "Marketing Strategy",
      "Social Media Marketing",
      "Internet Marketing",
      "Copywriting",
    ],
    "Все категории": [
      "Разработка",
      "Бизнес",
      "Финансы и бухгалтерский учет",
      "ИТ и ПО",
      "Личностный рост",
      "Дизайн",
      "Маркетинг",
    ],
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setSelectedCategory(null);
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
              <strong className="B">B</strong>ILIM-ORDO
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
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </div>
        </NavLink>

        <div className="buttons">
          <NavLink to="/signup">
            <button className="login">Log In</button>
          </NavLink>
          <NavLink to="/login">
            <button className="sign-up">Sign Up</button>
          </NavLink>
        </div>

      </header>

      <div
        className={`side-menu ${isMenuOpen ? "open" : ""}`}
        onScroll={handleMenuScroll}
      >
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
                Меню
              </span>
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
                Войти
              </NavLink>
            </div>

            <div className="divider" />
            <NavLink to="/signup" className="sidebar-link">
              Регистрация
            </NavLink>
            <div className="lines" />

            {isMobile && (
              <div className="popular-categories">
                <h3>Самые популярные</h3>
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

                <h3>Другие предложения Udemy</h3>
                <h4>Bilim Ordo Business</h4>
                <h4>Скачать приложение</h4>
                <h4>Пригласить друзей</h4>
                <h4>Справка и поддержка</h4>

                <div className="buttonLanguage">
                  <MdLanguage className="language-icon" />
                  <button>Русский</button>
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
