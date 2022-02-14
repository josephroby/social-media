import React from 'react';
import { useNavigate } from 'react-router-dom';

function PostTitleAndDetails(props) {

    const postId = props.id;
    const [posts, setPosts] = React.useState([]);
    const navigate = useNavigate();
    const getUserDetails = JSON.parse(localStorage.getItem("userDetails"));

    React.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
            .then((res) => res.json())
            .then((data) => setPosts(data));

    }, []);

    function backToPostPage() {
        navigate("/postPage");
    }

    return (
        <div>
            <button className="back-button" onClick={backToPostPage}>Back</button>
            <div className="posts-details">
            <h1>{posts.title}</h1>
            <p className='posts-body'>{posts.body}</p>
            <em className='posts-name'>created by:{getUserDetails.name}</em>
            </div>
        </div>
    );
}

export default PostTitleAndDetails;