import React from "react";
import "../styles/PostDetails.css";

function PostComments(props) {

    const [comment, setComment] = React.useState([]);
    const [userComment, setUserComment] = React.useState({ comments: "" });

    React.useEffect(function () {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}/comments`)
            .then((res) => res.json())
            .then((data) => setComment(data));
    }, []);

    const postComment = comment.map((comments) => <p>{comments.body}</p>);

    const handleChange = (event) => {
        setUserComment((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            }
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter your comments"
                    className="comment-box"
                    name="comments"
                    value={userComment.comments}
                    onChange={handleChange}
                />
                <button type="submit" classname="post-button">Post</button>
            </form>
            <p>{userComment.comments}</p>
            {postComment}
        </div>
    );
};

export default PostComments;