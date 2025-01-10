import React, { useState, useContext } from "react";
import "./SignUpModal.css";
import { TbXboxX } from "react-icons/tb";
import { CartContext } from "../../context/CartContext";
import axios from "axios";

function SignUpModal({ onClose }) {
  const { login } = useContext(CartContext);
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  // Форма талааларынын маанисин жаңыртуу
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // Форманы жиберүү
  async function handleSignup() {
    setError("");

    // Текшерүүлөр
    if (!formData.fullName) {
      setError("Full name is required.");
      return;
    }
    if (!formData.username) {
      setError("Username is required.");
      return;
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!formData.password || formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (!isChecked) {
      setError("Please agree to the terms and conditions.");
      return;
    }

    try {
      // Серверге POST запрос жөнөтүү
      const response = await axios.post("http://35.229.249.53/api/register/", {
        full_name: formData.fullName,
        username: formData.username,
        email: formData.email,
        password1: formData.password,
        password2: formData.password,
      });

      console.log("Registration successful:", response.data);
      alert("Registration successful!");
      localStorage.setItem("isUserRegistered", "true");
      login(); // Контексттен логин функциясын чакыруу
      onClose(); // Модалды жабуу
    } catch (err) {
      console.error("Registration error:", err.response?.data || err);
      setError(
        err.response?.data?.email?.[0] ||
        err.response?.data?.username?.[0] ||
        "Registration failed. Please try again."
      );
    }
  }

  return (
    <div className="SignUpModal">
      <div className="modal-header">
        <h4>Регистрация</h4>
        <TbXboxX onClick={onClose} />
      </div>
      <div className="SignUp-input">
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Full name"
        />
        <input
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Username"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Email"
        />
        <div className="password-container">
          <input
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="show-password-button"
          >
            {showPassword ? "Скрыть" : "Показать"}
          </button>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="checkbox-text">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <p>
          Send me special offers, personalized recommendations, and learning
          tips
        </p>
      </div>
      <div className="signup-button">
        <button onClick={handleSignup}>Sign Up</button>
        <p>
          By signing up, you agree to our <span>Terms of Use</span> and{" "}
          <span>Privacy Policy</span>
        </p>
      </div>
      <div className="login-link">
        <p>
          Already have an account? <span>Log in</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default SignUpModal;