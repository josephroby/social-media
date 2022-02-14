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

    const postComment = comment.map((comments) => <p> {comments.name}<br />{comments.body}</p>);

    const handleChange = (event) => {
        setUserComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setComment((prevState) => [{ name: getUserDetails.username, body: userComment }, ...prevState])
    }

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    type="text"
                    placeholder="enter your comments"
                    className="comment-box"
                    name="comments"
                    value={userComment}
                    onChange={handleChange}
                />
                 <div classname="post-button">
                <button type="submit" >Post</button> 
                </div>
            </form>
            {postComment}
        </div>
    );
};

export default PostComments;