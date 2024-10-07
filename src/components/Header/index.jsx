import React, { useState, useRef } from "react";
import "./Header.scss";
import udemy from "../../assets/images/udemy.png";
import heart from "../../assets/svg/heart.svg";
import korzina from "../../assets/svg/korzina.svg";
import notif from "../../assets/svg/notif.svg";
import { Dropdown } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
// import LogIn from "../Login";

function Header() {
  const [showMainMenu, setShowMainMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubSubMenu, setShowSubSubMenu] = useState(false);
  const [subMenuItems, setSubMenuItems] = useState([]);
  const [subSubMenuItems, setSubSubMenuItems] = useState([]);

  const [activeMainItem, setActiveMainItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [activeSubSubItem, setActiveSubSubItem] = useState(null);

  const timerRef = useRef(null);
  const titleNav = [
    "Разработка",
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

  const handleMouseEnterSubSubMenu = (subSubItem) => {
    clearTimeout(timerRef.current);
    setActiveSubSubItem(subSubItem);
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
                  className={`menu-item ${
                    activeMainItem === item.label ? "active" : ""
                  }`}
                  onMouseEnter={() =>
                    handleMouseEnterMainMenu(item.subMenu, item.label)
                  }
                >
                  <Dropdown.Item id="text" href={`#/action-${index}`}>
                    {item.label}
                  </Dropdown.Item>
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
                      className={`menu-item ${
                        activeSubItem === subItem ? "active" : ""
                      }`}
                      onMouseEnter={() => handleMouseEnterSubMenu(subItem)}
                    >
                      <Dropdown.Item id="text" href={`#/sub-action-${index}`}>
                        {subItem}
                      </Dropdown.Item>
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
                          className={`menu-item ${
                            activeSubSubItem === subSubItem ? "active" : ""
                          }`}
                          уровня
                          onMouseEnter={() =>
                            handleMouseEnterSubSubMenu(subSubItem)
                          }
                        >
                          <Dropdown.Item
                            id="text"
                            href={`#/sub-sub-action-${index}`}
                          >
                            {subSubItem}
                          </Dropdown.Item>
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
            <Link to={"/"}>
            {providers.map((provider, index) => (
            <Link to='#' key={index}>{provider}</Link>
          ))}
            </Link>

                <Link to={"/basket"}>
                <img src={korzina} alt="" />
                </Link>
                <Link to={"/login"}>
                <button className='b1'>Войти</button>
                </Link>
                <Link to={"/register"}>
                <button className='b2'>Регистрация</button>
                </Link>
            </div> 
      </div>
      <hr />
      <div className="bottom container">
        {titleNav.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </div>
    </header>
  );
}

export default Header;
