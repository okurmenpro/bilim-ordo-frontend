import React, { useState } from 'react';
import './Admin.scss';
import AdminLogo from "../assets/svg/logo2.svg";
import Back from "../assets/svg/back.svg";
import Dashboard from "../assets/svg/dashboard.svg";
import IconCourse from "../assets/svg/courses.svg";
import Cominication from "../assets/svg/caminication.svg";
import Revenue from "../assets/svg/revenue.svg";
import Setting from "../assets/svg/setting.svg";
import UserIcon from "../assets/images/autor.png";
import { NavLink } from 'react-router-dom';

const AdminPage = () => {
    const [isHovered, setIsHovered] = useState(false);
    const userName = "Клиенттин аты";

    return (
        <div
            className={`sidebar2 ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="sidebar2__header">
                <img src={AdminLogo} alt="Logo" className="sidebar2__logo" />
                <NavLink to={"/admin"} className="sidebar2__title-link">
                    <strong className="sidebar2__title">Bilim-Ordo</strong>
                </NavLink>
                <img src={Back} alt="Back" className="sidebar2__back" />
            </div>

            <div className="sidebar2__nav">
                <div className="sidebar2__nav-item">
                    <img src={Dashboard} alt="Dashboard" className="sidebar2__nav-icon" />
                    <NavLink to="/dashboard" className="sidebar2__nav-text">Dashboard</NavLink>
                </div>
                <div className="sidebar2__nav-item">
                    <img src={IconCourse} alt="Courses" className="sidebar2__nav-icon" />
                    <NavLink to="/courses" className="sidebar2__nav-text">Courses</NavLink>
                </div>
                <div className="sidebar2__nav-item">
                    <img src={Cominication} alt="Communication" className="sidebar2__nav-icon" />
                    <NavLink to="/communication" className="sidebar2__nav-text">Communication</NavLink>
                </div>
                <div className="sidebar2__nav-item">
                    <img src={Revenue} alt="Revenue" className="sidebar2__nav-icon" />
                    <NavLink to="/revenue" className="sidebar2__nav-text">Revenue</NavLink>
                </div>
                <div className="sidebar2__nav-item">
                    <img src={Setting} alt="Setting" className="sidebar2__nav-icon" />
                    <NavLink to="/settings" className="sidebar2__nav-text">Setting</NavLink>
                </div>
            </div>

            <div className="sidebar2__footer">
                <img src={UserIcon} alt="User" className="sidebar2__user-icon" />
                <strong className="sidebar2__user-greeting">Салам, {userName}</strong>
            </div>
        </div>
    );
};

export default AdminPage;