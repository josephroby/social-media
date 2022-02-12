import React from "react";
import { useParams } from "react-router-dom";
import "../styles/PostDetails.css";
import PostTitleAndDetails from "../components/PostTitleAndDetails";
import PostComments from "../components/PostComments";
import Header from "../components/Header";

function PostDetails( ){
  const  {id}  = useParams();
  return(
  <div>
  <Header />
 <PostTitleAndDetails id={id}/>
    <h4>Comments</h4>
 <PostComments id={id} />
 </div>
  )
}

export default PostDetails;