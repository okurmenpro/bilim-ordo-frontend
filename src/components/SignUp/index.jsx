import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import "./SignUp.scss";
import signup from "../../assets/images/signup2.png";
import facebook from "../../assets/svg/facebook.svg";
import google from "../../assets/svg/googel.svg";
import microsoft from "../../assets/svg/microsoft.svg";

import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const index = () => {
  return (
    <div>
      <div className="step-back">
        <NavLink to="/" className="nav-link">
          <IoChevronBackOutline className="backward" /> Backward
        </NavLink>
      </div>
      <div className="mian-spot container">
        <div className="main-spot">
          <img className="signup-png" src={signup} alt="" />
          <div className="right-register">
            <h1 className="registration">Create Your Account</h1>

            <div className="inputs">
              <h3>Full Name</h3>
              <div className="full-name-input">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="Username-input">
              <h3>Username</h3>
              <input type="text" placeholder="Username" />
            </div>

            <div className="Email-input">
              <h3>Email</h3>
              <input type="text" placeholder="Email ID" />
            </div>

            <div className="password-container">
              <div className="password-input">
                <h3>Password</h3>
                <input type="text" placeholder="Enter Password" />
              </div>

              <div className="password-input">
                <h3>Confirm Password</h3>
                <input type="text" placeholder="Confirm password" />
              </div>
            </div>
            <div className="buttom-label">
              <button>
                <p>Label</p>
                <FaArrowRightLong className="icon-right" />
              </button>
            </div>

            <div className="Sign-up-with">
              <div className="left-width"></div>
              <p>Sign up with</p>
              <div className="left-width"></div>
            </div>

            <div className="fgm-sign-in">
              <button className="Facebook-google-microsoft">
                <img src={facebook} alt="" />
                <p
                  style={{
                    color: " rgb(8, 102, 255)",
                    fontFamily: " Inter",
                    fontSize: "14px",
                  }}
                >
                  Facebook
                </p>
              </button>
              <button className="Facebook-google-microsoft">
                <img src={google} alt="" />
                <p
                  style={{
                    color: " rgb(234, 67, 53)",
                    fontFamily: " Inter",
                    fontSize: "14px",
                  }}
                >
                  Google
                </p>
              </button>
              <button className="Facebook-google-microsoft">
                <img src={microsoft} alt="" />
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    fontFamily: " Inter",
                    fontSize: "14px",
                  }}
                >
                  Microsoft
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
