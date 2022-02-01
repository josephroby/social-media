import React from "react";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
      <h1>This is Profile Page.</h1>
      
      Back to <Link to="/"> Login Page</Link>
    </div>
  );
}
export default ProfilePage;

