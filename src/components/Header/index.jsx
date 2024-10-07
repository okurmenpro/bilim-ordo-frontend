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

  const providers = ['Udemy Business', 'Преподавайте на Udemy', 'Мое обучение']

  return (
    <header>
      <div className="he">
        <div class="container header">
          <img src={udemy} alt="" />
          <button>Категории</button>
          <input type="search" placeholder='Поиск' />

          <div className='providers'>
            {providers.map((provider) => <a>{provider}</a>)}
          </div>

          <div className='icons'>
            <div className="icon">
              <img src={heart} alt="" />
            </div>
            <div className="icon">
              <img src={korzina} alt="" />
            </div>
            <div className="icon">
              <img className='not' src={notif} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='bottom container'>
        {categories.map((category) => <li>{category}</li>)}

      </div>
    </header>
  );
}

export default Header;
