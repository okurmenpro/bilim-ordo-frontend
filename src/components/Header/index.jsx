import React, { useState, useRef, useContext } from "react";
import "./Header.scss";
import udemy from "../../assets/images/udemy.png";
import heart from "../../assets/svg/heart.svg";
import korzina from "../../assets/svg/korzina.svg";
import notif from "../../assets/svg/notif.svg";
import wold from "../../assets/svg/wold.svg";
import { Dropdown } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { GrCart } from "react-icons/gr";

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

  const providers = ['Udemy Business', 'Преподавайте на Udemy'];

  return (
    <header>
      <div className="he">
        <div className="container header">
          <img src={udemy} alt="" />
          <Dropdown
            onMouseEnter={handleMouseEnterAllMenus}
            onMouseLeave={handleMouseLeaveAllMenus}
          >
            <button className="cate-btn">Категории</button>
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
                <div className='providers'>
                  {providers.map((provider) => <a key={provider}>{provider}</a>)}
                </div>

                <input type="search" placeholder='Поиск' />

                <div className="login-btns">
                  <button className="login-btn">Войти</button>
                  <button className="register-btn">Зарегистрироваться</button>
                </div>

                <div className='icons'>
                  <div className="icon">
                    <img src={korzina} alt="" />
                    <img src={heart} alt="" />
                  </div>
                </div>
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
              <div className="cart-icon">
                <GrCart className="cartIcon" />
                {cartItems.length === 0 && <span className="cart-count"></span>}
                {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
              </div>
            </Link>
            <div className="icon">
              <img className='not' src={wold} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='bottom container'>
      </div>
    </header>
  );
}

export default Header;
