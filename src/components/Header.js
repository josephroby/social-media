import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getNameInitials } from "../functions/getNameInitials";
import { getUserName } from "../functions/getUserName";

function Header() {
  const navigate = useNavigate();
  const loggedInUser = getUserName();
  const initials = getNameInitials(loggedInUser);

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
          <small>{loggedInUser} </small>
          <Link to="/profilePage" className="profile-page">
            {initials}
          </Link>
        </header>
      </div>
    </div>
  );
}
export default Header;
