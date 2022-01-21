import React from "react";
import { Link } from "react-router-dom";

function PostPage() {
  return (
    <div>
      <h1>This is Posts Page .</h1>
      Back to <Link to="/"> Login Page</Link>
    </div>
  );
}
export default PostPage;
