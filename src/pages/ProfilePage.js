import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { getUserName } from "../functions/getUserName";
import { getNameInitials } from "../functions/getNameInitials";
import "../styles/ProfilePage.css";
import { getLoggedInUser } from "../functions/getLoggedInUser";

function ProfilePage() {
  const signedInUser = getLoggedInUser();
  const navigate = useNavigate();
  const loggedInUser = getUserName();
  const initials = getNameInitials(loggedInUser);

  function backToPostPage() {
    navigate("/postPage");
  }

  return (
    <div>
      <Header />
      <button className="back-button" onClick={backToPostPage}>
        Back
      </button>
      <div className="profile-content">
        <div className="profile-head">
          <div className="name-logo">{initials} </div>
          <div className="name-text">{loggedInUser} </div>
        </div>
        <p>Username:{signedInUser.username}</p>
        <p>E-mail:{signedInUser.email}</p>
        <p>
          Address:{signedInUser.address.street} , {signedInUser.address.suite} ,
          {signedInUser.address.city}, {signedInUser.address.zipcode}
        </p>
        <p>Phone:{signedInUser.phone}</p>
      </div>
    </div>
  );
}
export default ProfilePage;
