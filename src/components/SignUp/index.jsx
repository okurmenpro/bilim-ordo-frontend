import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import "./SignUp.scss";
import signup from "../../assets/images/signup2.png";
import facebook from "../../assets/svg/facebook.svg";
import google from "../../assets/svg/googel.svg";
import microsoft from "../../assets/svg/microsoft.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://35.229.249.53/register/",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Registration successful:", response.data);
    } catch (err) {
      console.error(
        "Registration error:",
        err.response ? err.response.data : err
      );
      setError("Error during registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="step-back">
        <NavLink to="/" className="nav-link">
          <IoChevronBackOutline className="backward" /> Backward
        </NavLink>
      </div>
      <div className="main-spot">
        <img className="signup-png" src={signup} alt="" />
        <div className="right-register">
          <h1 className="registration">Create Your Account</h1>

          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <h3>Full Name</h3>
              <div className="full-name-input">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="Username-input">
              <h3>Username</h3>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="Email-input">
              <h3>Email</h3>
              <input
                type="email"
                placeholder="Email ID"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="password-container">
              <div className="password-input">
                <h3>Password</h3>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="password-input">
                <h3>Confirm Password</h3>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="buttom-label">
              <button type="submit" disabled={loading}>
                <p>{loading ? "Registering..." : "Register"}</p>
                <FaArrowRightLong className="icon-right" />
              </button>
            </div>
          </form>

          <div className="Sign-up-with">
            <div className="left-width"></div>
            <p>Sign up with</p>
            <div className="left-width"></div>
          </div>

          <div className="fgm-sign-in">
            <button className="Facebook-google-microsoft">
              <div>
                <img src={facebook} alt="" />
                <p style={{ color: "blue" }}>Facebook</p>
              </div>
            </button>
            <button className="Facebook-google-microsoft">
              <div>
                <img src={google} alt="" />
                <p style={{ color: " rgb(234, 67, 53)" }}>Google</p>
              </div>
            </button>
            <button className="Facebook-google-microsoft">
              <div>
                <img src={microsoft} alt="" />
                <p style={{ color: "rgb(0, 0, 0)" }}>Microsoft</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
