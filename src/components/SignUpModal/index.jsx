import React, { useState, useContext } from "react";
import "./SignUpModal.css";
import { TbXboxX } from "react-icons/tb";
// import { auth } from "../../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { CartContext } from "../CartContext";

function SignUpModal({ onClose }) {
  const { login } = useContext(CartContext);
  const [user, setUser] = useState({ Email: "", Password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  function handler(event) {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  }

  async function signupbutton() {
    if (!isChecked) {
      alert("Пожалуйста, подтвердите, что вы согласны с условиями.");
      return;
    }

    try {
      // await createUserWithEmailAndPassword(auth, user.Email, user.Password);
      alert("Регистрация прошла успешно!");
      localStorage.setItem("isUserRegistered", "true"); // Сохраняем состояние регистрации в localStorage
      login();
      onClose();
    } catch (error) {
      alert("Вы не прошли регистрацию. Попробуйте еще раз.");
      console.log(error);
    }
  }

  return (
    <div className="SignUpModal">
      <div className="modal-header">
        <h4>Регистрация</h4>
        <TbXboxX onClick={onClose} />
      </div>
      <div className="SignUp-input">
        <input className="form-control" placeholder="Full name" />
        <input
          onChange={handler}
          value={user.Email}
          name="Email"
          className="form-control"
          placeholder="Email"
        />
        <div className="password-container">
          <input
            onChange={handler}
            value={user.Password}
            name="Password"
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
        <button onClick={signupbutton}>Sign Up</button>
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
