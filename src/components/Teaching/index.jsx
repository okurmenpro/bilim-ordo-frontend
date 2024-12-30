import React, { useState } from "react";
import "./Teach.scss";
import Teachingimg from "../../assets/images/teaching.png";
import { NavLink } from "react-router-dom";
import SignUpModal from "../SignUpModal";

function Teaching() {
  const [showModal, setShowModal] = useState(false);

  const handleStartClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="teaching">
      <img src={Teachingimg} alt="" />
      <div className="infoteaching container">
        <h1 className="teachingh1">Учите у нас</h1>
        <strong className="tstong">
          Станьте преподавателем и меняйте жизни к лучшему — включая свою
        </strong>
        <button className="tbtn" onClick={handleStartClick}>
          Начните действовать
        </button>
      </div>

      {showModal && <SignUpModal onClose={handleCloseModal} />}
    </div>
  );
}

export default Teaching;
