import React from "react";
import { useNavigate } from "react-router-dom";

function PostTitleAndDetails(props) {
    const [post, setPost] = React.useState([]);
    const [posts, setPosts] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    React.useEffect(() => {
        setPost(posts.filter((item) => {
            if (item.id === parseInt(props.id)) {
                return item;
            }
        }))
    }, [posts]);

    function backToPostPage(){
        navigate("/postPage");
    }

    return (
        <div>
            <button className="back-button" onClick={backToPostPage}>
                
                Back

                </button>
            <h1> {post[0]?.title} </h1>
            {post[0]?.body}
        </div>
    )
}
export default PostTitleAndDetails;