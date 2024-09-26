import React, { useState } from 'react';
import './DropdownProfile.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { MdKeyboardArrowRight } from 'react-icons/md';

function DropdownProfile() {
    const [showMainMenu, setShowMainMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showSubSubMenu, setShowSubSubMenu] = useState(false);
    const [subMenuItems, setSubMenuItems] = useState([]);
    const [subSubMenuItems, setSubSubMenuItems] = useState([]);

    const mainMenuItems = [
        {
            label: 'Разработка',
            subMenu: ['Frontend', 'Backend'],
        },
        {
            label: 'Бизнес',
            subMenu: ['Маркетинг', 'Продажи'],
        },
        {
            label: 'Финансы и бухгалтерский учет',
            subMenu: ['Бухгалтерия', 'Финансовый анализ'],
        },
        {
            label: 'ИТ и ПО',
            subMenu: ['Тестирование', 'Программирование'],
        },
    ];

    const subSubMenuData = {
        Frontend: ['React', 'Vue'],
        Backend: ['Node.js', 'Django'],
        Маркетинг: ['Digital', 'SMM'],
        Продажи: ['B2B', 'B2C'],
        Бухгалтерия: ['Налоги', 'Отчеты'],
        Финансовый: ['Финансовые отчеты', 'Аудит'],
        Тестирование: ['Unit-тесты', 'UI/UX-тестирование'],
        Программирование: ['Python', 'JavaScript'],
    };

    const handleMouseEnterMainMenu = (subMenu) => {
        setSubMenuItems(subMenu);
        setShowSubMenu(true);
        setShowSubSubMenu(false);
    };

    const handleMouseEnterSubMenu = (subMenuItem) => {
        setSubSubMenuItems(subSubMenuData[subMenuItem] || []);
        setShowSubSubMenu(true);
    };

    const handleMouseLeaveAllMenus = () => {
        setShowMainMenu(false);
        setShowSubMenu(false);
        setShowSubSubMenu(false);
    };

    return (
        <div className="dropdown-container">
            <Dropdown
                onMouseEnter={() => setShowMainMenu(true)}
                onMouseLeave={handleMouseLeaveAllMenus}
            >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown
                </Dropdown.Toggle>

                {showMainMenu && (
                    <div className="main-menu">
                        {mainMenuItems.map((item, index) => (
                            <div
                                key={index}
                                className="menu-item"
                                onMouseEnter={() => handleMouseEnterMainMenu(item.subMenu)}
                            >
                                <Dropdown.Item id="text" href={`#/action-${index}`}>
                                    {item.label}
                                </Dropdown.Item>
                                <MdKeyboardArrowRight />
                            </div>
                        ))}

                        {showSubMenu && (
                            <div className="submenu">
                                {subMenuItems.map((subItem, index) => (
                                    <div
                                        key={index}
                                        className="menu-item"
                                        onMouseEnter={() => handleMouseEnterSubMenu(subItem)}
                                    >
                                        <Dropdown.Item id="text" href={`#/sub-action-${index}`}>
                                            {subItem}
                                        </Dropdown.Item>
                                        <MdKeyboardArrowRight />
                                    </div>
                                ))}

                                {showSubSubMenu && (
                                    <div className="subsubmenu">
                                        {subSubMenuItems.map((subSubItem, index) => (
                                            <div key={index} className="menu-item">
                                                <Dropdown.Item id="text" href={`#/sub-sub-action-${index}`}>
                                                    {subSubItem}
                                                </Dropdown.Item>
                                                <MdKeyboardArrowRight />

                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </Dropdown>
        </div>
    );
}

export default DropdownProfile;
