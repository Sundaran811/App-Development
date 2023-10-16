import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GiMedicalPackAlt } from 'react-icons/gi';
import { getToken, removeToken, removeRole, removeEmail, getRole } from "./LocalStorage";

function Navbar() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const token = getToken();
  const role = getRole();
  const nav = useNavigate();


  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Please Wait... Soon You're there!", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  const handleLogout = () => {
    removeEmail();
    removeToken();
    removeRole();
    window.location.href = "/";
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <GiMedicalPackAlt />Medi Spark
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/reviews" className="navbar-links">
            Reviews
          </Link>
        </li>

        <li>
          <a href="#contact" className="navbar-links">
            Contact
          </a>
        </li>
        <li>
          {token ? (
            <button className="navbar-links" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/loginoptions" className="navbar-links">
              Login
            </Link>
          )}
        </li>
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <FontAwesomeIcon icon={faCommentDots} /> Live Chat
      </button>

      {/* Mobile */}

    </div>
  );
}

export default Navbar;
