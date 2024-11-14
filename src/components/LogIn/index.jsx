import React, { useState } from "react";
import authorization from "../../assets/images/authorization.png";
import "./Login.scss";

const Authorization = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email) {
      alert("Пожалуйста, введите адрес электронной почты.");
      return;
    }
    if (!password) {
      alert("Пожалуйста, введите пароль.");
      return;
    }

    if (email === "aidana@gmail.com" && password === "1234567") {
      alert("Успешная авторизация!");
    } else {
      alert("Неправильный email или пароль.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="authorization">
      <div className="authorization-left">
        <button className="back-button">Назад</button>
        <img src={authorization} alt="Authorization" />
      </div>
      <div className="authorization-right">
        <h1>Авторизация</h1>
        <input
          type="email"
          placeholder="Адрес электронной почты"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Скрыть" : "Показать"}
          </button>
        </div>
        <p>
          Нет аккаунта? <a href="/register">Зарегистрироваться</a>
        </p>
        <button className="login-button" onClick={handleLogin}>
          Войти
        </button>

        <div className="social-icons">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1024px-2023_Facebook_icon.svg.png"
            alt="Facebook"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/0/747.png"
            alt="Apple"
          />
        </div>
      </div>
    </div>
  );
};

export default Authorization;
