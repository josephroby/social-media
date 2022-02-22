import React from "react";
import { getLoggedInUser } from "../functions/getLoggedInUser";
import "../styles/PostDetails.css";

function PostComments(props) {
  const [userComment, setUserComment] = React.useState("");
  const getUserDetails = getLoggedInUser();
  const [comment, setComment] = React.useState([]);

  React.useEffect(function () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  const postComment = comment.map((comments) => (
    <p>
      {comments.getUserName}
      <br />
      {comments.body}
    </p>
  ));

  const handleChange = (event) => {
    setUserComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComment((prevState) => [
      { getUserName: getUserDetails.username, body: userComment },
      ...prevState,
    ]);
  };
  console.log(comment);

  return (
    <div>
      <div className="comment-body">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter your comments"
            className="comment-box"
            name="comments"
            value={userComment}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">
            Post
          </button>
        </form>
        {postComment}
      </div>
    </div>
  );
}

export default PostComments;
