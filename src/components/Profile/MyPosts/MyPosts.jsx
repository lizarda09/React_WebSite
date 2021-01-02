import React from 'react';
import classes from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "../Post/Post";

const MyPosts = (props) => {

   let postElem = props.posts.map(post => {
      return <Post message={post.postValue}/>
   });

   return <div>
      <NewPost addPost={props.addPost}/>
      {postElem}
   </div>
}

export default MyPosts;