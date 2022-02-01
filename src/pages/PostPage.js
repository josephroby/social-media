import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/PostPage.css";

function PostPage() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const navigate = useNavigate();
  const getUserDetails = JSON.parse(localStorage.getItem("userDetails"));
  const filteredPosts = posts.filter(
    (post) => post.userId === getUserDetails.id
  );
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
      <Link to="/postDetails" className="post-page">
        {filteredPosts.map((filteredPost) => (
          <div className="content-wrapper">
            <h1>Post title:{filteredPost.title}</h1>{" "}
            <em> created by:{getUserDetails.username}</em>
            <p>{filteredPost.body}</p>
          </div>
        ))}
      </Link>
    </div>
  );
}
export default PostPage;
