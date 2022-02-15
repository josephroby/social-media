import React from "react";
import "../styles/PostDetails.css";

function PostComments(props) {

    const [comment, setComment] = React.useState([]);
    const [userComment, setUserComment] = React.useState("");
    const getUserDetails = JSON.parse(localStorage.getItem("userDetails"));

    React.useEffect(function () {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
            .then((res) => res.json())
            .then((data) => setComment(data));
    }, []);

    const postComment = comment.map((comments) => <p> {comments.getUserName}<br />{comments.body}</p>);

    const handleChange = (event) => {
        setUserComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setComment((prevState) => [{ getUserName: getUserDetails.username, body: userComment }, ...prevState])
    }

    return (
        <div>
            <div className="comment-body">
            <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    type="text"
                    placeholder="enter your comments"
                    className="comment-box"
                    name="comments"
                    value={userComment}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="submit-button" >
                    Post
                </button>             
            </form>
            {postComment}
            </div>
        </div>
    );
};

export default PostComments;