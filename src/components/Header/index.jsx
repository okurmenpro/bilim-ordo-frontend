import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import udemy from "../../assets/images/udemy.png";
import korzina from "../../assets/svg/korzina.svg";
import notif from "../../assets/svg/notif.svg";
import { Dropdown } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CartContext } from "../CartContext";

function Header() {
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubSubMenu, setShowSubSubMenu] = useState(false);
  const [subMenuItems, setSubMenuItems] = useState([]);
  const [subSubMenuItems, setSubSubMenuItems] = useState([]);
  const [activeMainItem, setActiveMainItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [activeSubSubItem, setActiveSubSubItem] = useState(null);

  const { cartItems } = useContext(CartContext);
  const timerRef = useRef(null);

  const titleNav = [
    "Разработка",
    "Финансы и бухгалтерский учет",
    "ИТ и ПО",
    "Офисное Программное обеспечение",
  ];

  const mainMenuItems = [
    {
      label: "Разработка",
      subMenu: ["Frontend", "Backend"],
    },
    {
      label: "Бизнес",
      subMenu: ["Маркетинг", "Продажи"],
    },
    {
      label: "Финансы и бухгалтерский учет",
      subMenu: ["Бухгалтерия", "Финансовый анализ"],
    },
    {
      label: "ИТ и ПО",
      subMenu: ["Тестирование", "Программирование"],
    },
  ];

  const subSubMenuData = {
    Frontend: ["React", "Vue"],
    Backend: ["Node.js", "Django"],
    Маркетинг: ["Digital", "SMM"],
    Продажи: ["B2B", "B2C"],
    Бухгалтерия: ["Налоги", "Отчеты"],
    Финансовый: ["Финансовые отчеты", "Аудит"],
    Тестирование: ["Unit-тесты", "UI/UX-тестирование"],
    Программирование: ["Python", "JavaScript"],
  };

  const handleMouseEnterMainMenu = (subMenu, mainItem) => {
    clearTimeout(timerRef.current);
    setSubMenuItems(subMenu);
    setShowSubMenu(true);
    setShowSubSubMenu(false);
    setActiveMainItem(mainItem);
    setActiveSubItem(null);
    setActiveSubSubItem(null);
  };

  const handleMouseEnterSubMenu = (subMenuItem) => {
    clearTimeout(timerRef.current);
    setSubSubMenuItems(subSubMenuData[subMenuItem] || []);
    setShowSubSubMenu(true);
    setActiveSubItem(subMenuItem);
    setActiveSubSubItem(null);
  };

  const handleMouseLeaveAllMenus = () => {
    timerRef.current = setTimeout(() => {
      setShowMainMenu(false);
      setShowSubMenu(false);
      setShowSubSubMenu(false);
      setActiveMainItem(null);
      setActiveSubItem(null);
      setActiveSubSubItem(null);
    }, 300);
  };

  const handleMouseEnterAllMenus = () => {
    clearTimeout(timerRef.current);
    setShowMainMenu(true);
  };

  const providers = ['Udemy Business', 'Преподавайте на Udemy', 'Мое обучение'];

  return (
    <header>
      <div className="container">
        <img src={udemy} alt="Udemy" />
        <Dropdown
          onMouseEnter={handleMouseEnterAllMenus}
          onMouseLeave={handleMouseLeaveAllMenus}
        >
          <h3>Категории</h3>
          {showMainMenu && (
            <div
              className="main-menu"
              onMouseEnter={handleMouseEnterAllMenus}
              onMouseLeave={handleMouseLeaveAllMenus}
            >
              {mainMenuItems.map((item, index) => (
                <div
                  key={index}
                  className={`menu-item ${activeMainItem === item.label ? "active" : ""}`}
                  onMouseEnter={() => handleMouseEnterMainMenu(item.subMenu, item.label)}
                >
                  <Link to="/development">
                    <Dropdown.Item id="text">{item.label}</Dropdown.Item>
                  </Link>
                  <MdKeyboardArrowRight />
                </div>
              ))}

              {showSubMenu && (
                <div
                  className="submenu"
                  onMouseEnter={handleMouseEnterAllMenus}
                  onMouseLeave={handleMouseLeaveAllMenus}
                >
                  {subMenuItems.map((subItem, index) => (
                    <div
                      key={index}
                      className={`menu-item ${activeSubItem === subItem ? "active" : ""}`}
                      onMouseEnter={() => handleMouseEnterSubMenu(subItem)}
                    >
                      <Dropdown.Item id="text">{subItem}</Dropdown.Item>
                      <MdKeyboardArrowRight />
                    </div>
                  ))}

                  {showSubSubMenu && (
                    <div
                      className="subsubmenu"
                      onMouseEnter={handleMouseEnterAllMenus}
                      onMouseLeave={handleMouseLeaveAllMenus}
                    >
                      {subSubMenuItems.map((subSubItem, index) => (
                        <div
                          key={index}
                          className={`menu-item ${activeSubSubItem === subSubItem ? "active" : ""}`}
                        >
                          <Dropdown.Item id="text">{subSubItem}</Dropdown.Item>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </Dropdown>

        <input type="search" placeholder="Ищите что угодно" />

        <div className='providers'>
          {providers.map((provider, index) => (
            <Link to='#' key={index}>{provider}</Link>
          ))}
          <Link to="/basket">
            <img src={korzina} alt="Корзина" />
          </Link>
          <Link to="/login">
            <button className='b1'>Войти</button>
          </Link>
          <Link to="/register">
            <button className='b2'>Регистрация</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
