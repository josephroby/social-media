import React from "react";
import "../styles/PostDetails.css";
function Postcomments(props) {

    const [comments, setComments] = React.useState([]);
    const [filteredComments, setfilteredComments] = React.useState([]);
    const [userComments, setUserComments] = React.useState({ commentbox: "" })
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    React.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((data) => setComments(data));
    }, []);

    React.useEffect(() => {
        setfilteredComments(comments.filter((item) => {
            if (item.postId === parseInt(props.id)) {
                console.log("inloop");
                return item;
            }
        }))
    }, [comments]);

    function handleChange(event) {
        setUserComments((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            };
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <p> created by {userDetails.name} </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your comments"
                    className="comment-box"
                    name="commentbox"
                    value={userComments.commentbox}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="post-button"
                >
                    Post
                </button>
            </form>
            <p>{userComments.commentbox}</p>
            {filteredComments.map((item) =>
            (
                <div> {item.body} </div>
            ))
            }
        </div>
    )
}
export default Postcomments;