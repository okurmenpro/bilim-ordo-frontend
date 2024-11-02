// SignUpModal.js
import React from "react";
import "./SignUpModal.css";
import { TbXboxX } from "react-icons/tb";

function SignUpModal({ onClose }) {
  return (
    <div className="SignUpModal">
      <div className="modal-header">
        <h4>Регистрация</h4>
        <TbXboxX onClick={onClose} />
      </div>
      <div className="SignUp-input">
        <input className="form-control" placeholder="Full name" />
        <input className="form-control" placeholder="Email" />
        <input className="form-control" placeholder="Password" />
      </div>
      <div className="checkbox-text">
        <input type="checkbox" />
        <p>
          Send me special offers, personalized recommendations, and learning
          tips
        </p>
      </div>
      <div className="signup-button">
        <button>Sign Up</button>
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
