import React from "react";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div>
      <h1>This is Login Page</h1>
      <Link to="postPage">Click to view Post page.</Link>
      <br />

      <Link to="postDetails">Click here to view Post Details.</Link>
      <br />
      <Link to="profilePage">Click here to view Profile Page.</Link>
    </div>
  );
}
export default LoginPage;
