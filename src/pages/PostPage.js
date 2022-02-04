import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/PostPage.css";

function PostPage() {
  const [posts, setPosts] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const getUserDetails = JSON.parse(localStorage.getItem("userDetails"));
  const filteredPosts = posts.filter((post) => {
    if (post.userId === getUserDetails.id) {
      return post;
    }
  });

  function viewPosts() {
    navigate("/postDetails");
  }

  return (
    <div>
      <Header />
      <div className="content-wrapper">
        {filteredPosts.map((post) => (
          <div>
            <div className="post-content">
              {" "}

              <h3> {post.title}</h3>{" "}
            </div>
            <div className="post-content">
              {" "}
              <em> created by:{getUserDetails.username}</em>
            </div>

            <div className="post-content">
              {" "}
              <p>{post.body}</p>{" "}
            </div>
            <div className="post-content">
              {" "}
              <button className="viewPosts-button" onClick={viewPosts}>
                View Post
              </button>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PostPage;
