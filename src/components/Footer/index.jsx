import React from "react";
import "./Footer.scss";
import { GrGithub as Github } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import microsoft from "../../assets/svg/microsoft.svg"
import { FaXTwitter } from "react-icons/fa6";
import facebook from "../../assets/svg/facebook.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="info container">

        <div className="info-bottom">
          <strong>
            <span className="first-letter">B</span>ILIM-ORDO
          </strong>
          <p>Empowering learners through accessible and engaging online education.
            Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences. </p>
        </div>

        <div className="categoris">
          <div className="categori">
            <strong className="text">Get Help</strong>
            <ul>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Latest Articles</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="categori">
            <strong className="text">Get Help</strong>
            <ul>
              <li>
                <a href="">Art & Design</a>
              </li>
              <li>
                <a href="">Business</a>
              </li>
              <li>
                <a href="">IT & Software</a>
              </li>
              <li>
                <a href="">Languages</a>
              </li>
              <li>
                <a href="">Programming</a>
              </li>
            </ul>
          </div>
          <div className="categori">
            <strong className="text">Get Help</strong>
            <ul>
              <li>
                <a href="">Address: 123 Main Street, Anytown, CA 12345</a>
              </li>
              <li>
                <a href="">Tel: +(123) 456-7890</a>
              </li>
              <li>
                <a href="">Mail: bywayedu@webkul.in</a>
              </li>
            </ul>
            <div className="images">
              <img className="facebok" src={facebook} alt="icon facebok" />
              <Github className="icons" />
              <FcGoogle className="icons" />
              <FaXTwitter className="icons" />
              <div className="microsoft">
                <img src={microsoft} alt="icon microsoft" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
