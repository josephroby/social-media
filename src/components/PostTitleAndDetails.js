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
            <button className='back-button' onClick={backToPostPage}>Back</button>
            <h1>{posts.title}</h1>
            <p>{posts.body}</p>
            <p>created by:{getUserDetails.name}</p>
        </div>
    );
}

export default PostTitleAndDetails;