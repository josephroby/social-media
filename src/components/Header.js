import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  
  const getUserDetails = JSON.parse(localStorage.getItem("userDetails"));
  const navigate = useNavigate();
  const userName = getUserDetails.name;
  const fullName = userName.split(" ");
  const firstLetter = userName.charAt(0);
  const lastLetter = fullName[fullName.length - 1].charAt(0);
  const combine = firstLetter + lastLetter;

  function handleLogOut() {
    navigate("/");
    localStorage.removeItem("userDetails");
  }

  return (
    <div>
      <div className="header-container">
        <header>
          <button
            type="button"
            onClick={handleLogOut}
            className="logout-button"
          >
            LOGOUT
          </button>
          <small>{getUserDetails.name} </small>
          <Link to="/profilePage" className="profile-page">
            {combine}
          </Link>
        </header>
      </div>
    </div>
  );
}
export default Header;
