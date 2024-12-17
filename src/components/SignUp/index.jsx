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
  const [userParams, setUserParams] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  // Ошол эле учурда сырсөздөрдү салыштыруу үчүн дагы бир state
  // const [confirmPassword, setConfirmPassword] = useState("");

  // Серверге маалымат жөнөтүү функциясы
  async function hold(userDataParams) {
    try {
      const { data } = await axios.post(
        "https://api.escuelajs.co/api/v1/users/",
        userDataParams
      );

      const loginResponse = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email: userDataParams.email,
          password: userDataParams.password,
        }
      );

      // Колдонуучунун маалыматын localStorage'га сактоо
      localStorage.setItem("user", JSON.stringify(loginResponse.data));
      console.log(data, "Registration successful");
    } catch (error) {
      console.error("Error occurred:", error.response?.data || error.message);
      alert(
        "Error: " +
          (error.response?.data?.message || "Something went wrong, try again!")
      );
    }
  }

  // Инпутту өзгөртүү функциясы
  const changeInput = (e) => {
    const { name, value } = e.target;
    setUserParams({ ...userParams, [name]: value });
  };

  // Форманы жөнөтүү жана текшерүү
  const sendForm = (e) => {
    e.preventDefault();

    // Сырсөздөрдү салыштыруу
  //   if (userParams.password !== confirmPassword) {
  //     alert("Passwords do not match!");
  //     return;
  //   }

    console.log(userParams);
    hold(userParams);
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

          <form onSubmit={sendForm}>
            <div className="Username-input">
              <h3>Username</h3>
              <input
                onChange={changeInput}
                type="text"
                placeholder="Name"
                name="name"
              />
            </div>

            <div className="Email-input">
              <h3>Email</h3>
              <input
                onChange={changeInput}
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>

            <div className="Avatar-input">
              <h3>Avatar URL</h3>
              <input
                onChange={changeInput}
                type="text"
                placeholder="Avatar URL"
                name="avatar"
              />
            </div>

            <div className="password-container">
              <div className="password-input">
                <h3>Password</h3>
                <input
                  onChange={changeInput}
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>

              <div className="password-input">
                <h3>Confirm Password</h3>
                <input
                  // onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="buttom-label">
              <input type="submit" value="Create an account" />
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
