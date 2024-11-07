import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import "./SignUp.css";
import signup from "../../assets/images/signup.png";
import { NavLink } from "react-router-dom";
const index = () => {
  return (
    <div>
      <div className="step-back">
        <NavLink to="/" className="nav-link">
          <IoChevronBackOutline className="backward" /> Backward
        </NavLink>
      </div>
      <div className="main-spot">
        <img className="signup-png" src={signup} alt="" />
        <div>
          <h1 className="registration">Регистрация</h1>
          <div className="inputs">
            <input placeholder="Name" type="text" />
            <input placeholder="Surname" type="text" />
            <input placeholder="Phone number" type="text" />
            <input placeholder="Адрес электронной почты" type="text" />
          </div>
          <div className="bottom-sign-in">
            <p className="already-account">
              Есть аккаунт?{" "}
              <span className="sign-into">
                <NavLink to="/login">Войти</NavLink>
              </span>
            </p>
          </div>
          <button className="register">Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
};

export default index;
