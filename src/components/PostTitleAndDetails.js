import React from "react";
import { useNavigate } from "react-router-dom";
import { getUserName } from "../functions/getUserName";
import useFetch from "../hooks/useFetch";

function PostTitleAndDetails(props) {
  const postId = props.id;
  const [posts] = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + postId);
  const navigate = useNavigate();
  const loggedInUser = getUserName();

  function backToPostPage() {
    navigate("/postPage");
  }

  return (
    <div>
      <button className="back-button" onClick={backToPostPage}>
        Back
      </button>
      <div className="posts-details">
        <h1>{posts.title}</h1>
        <p className="posts-body">{posts.body}</p>
        <em className="posts-name">created by:{loggedInUser}</em>
      </div>
    </div>
  );
}

export default PostTitleAndDetails;
