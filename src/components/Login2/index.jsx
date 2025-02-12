import React, { useState } from "react";
import authorization from "../../assets/images/Loginbackground.jpg";
import "./Login.scss";
import facebook from "../../assets/svg/facebook.svg";
import google from "../../assets/svg/googel.svg";
import microsoft from "../../assets/svg/microsoft.svg";
import { useNavigate } from "react-router";
import axios from "axios";

const Authorization = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: ""
  // });

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    // if (formData.password !== formData.confirmPassword) {
    //   setError("Passwords do not match.");
    //   return;
    // }

    // setLoading(true);
    // setError(null);
    console.log("data", {
      username: email,
      password1: password,
    });
    try {
      const response = await axios.post(
        "http://34.93.66.214/api/login/",
        {
          username: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Registration successful:", response.data);
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: email,
          password: password,
        })
      );
      Navigate("/");
      window.location.reload();
    } catch (err) {
      console.error(
        "Registration error:",
        err.response ? err.response.data : err
      );
      // setError("Error during registration. Please try again.");
    } finally {
      // setLoading(false);
    }
  };

  // const handleLogin = () => {
  // if (!email) {
  //   alert("Пожалуйста, введите адрес электронной почты.");
  //   return;
  // }
  // if (!password) {
  //   alert("Пожалуйста, введите пароль.");
  //   return;
  // }

  // if (email === "aidana@gmail.com" && password === "1234567") {
  //   alert("Успешная авторизация!");
  // } else {
  //   alert("Неправильный email или пароль.");
  // }
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="authorization container">
      <div className="authorization-right">
        <p className="sign-account">Sign in to your account</p>
        <input
          type="email"
          placeholder="Username or Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-container2">
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
          <svg
            className="arrow-right"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>

        <div className="Signupwith">
          <div className="line1">
            <hr className="here2" />
          </div>
          <p className="words">Sign With In</p>
          <div className="line2">
            <hr className="here" />
          </div>
        </div>

        <div className="fgm-sign-in">
          <button className="Facebook-google-microsoft">
            <div className="sotsety">
              <img src={facebook} alt="" />
              <p style={{ color: "blue" }}>Facebook</p>
            </div>
          </button>
          <button className="Facebook-google-microsoft">
            <div className="sotsety">
              <img src={google} alt="" />
              <p style={{ color: " rgb(234, 67, 53)" }}>Google</p>
            </div>
          </button>
          <button className="Facebook-google-microsoft">
            <div className="sotsety">
              <img src={microsoft} alt="" />
              <p style={{ color: "rgb(0, 0, 0)" }}>Microsoft</p>
            </div>
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
