import React, { useState } from "react";
import authorization from "../../assets/images/Loginbackground.jpg";
import "./Login.scss";
import  microsoft from '../../assets/images/microsoft.jpg'

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
        <div className="authorization-right">
        <p className="sign-account">Sign in to your account </p>
        <input
          type="email"
          placeholder="Username or Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
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
        <button className="login-button" onClick={handleLogin}>
          Войти 
          <svg className="arrow-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
          
        </button>
 
        <div className="Signupwith">
          <div className="line1"> <hr className="here2" /></div>
          <p className="words"> Sign With In</p>
          <div className="Line2"><hr className="here" /></div>

        </div>
        
      

        <div className="social-icons">
          <button className="facebook-button">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1024px-2023_Facebook_icon.svg.png"
            alt="Facebook"
            />
            </button>
            <button className="Google-button">

          <img 
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google"
            />
       
              </button>
            <button className="Microsoft">

          <img className="Microsoft-img"
            src={microsoft}
            alt="Microsoft"
            />
       
            </button>
        </div>
      </div>
      <div className="authorization-left">
        <img className="big-images" src={authorization} alt="Authorization" />
      </div>
     
    </div>
  );
};

export default Authorization;
