import React from 'react';
import classes from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = () => {
   return <div>
      <NewPost />
      <Post message = 'Hello, how are you?'/><br/>
      <Post message = 'Merry X-mas and Happy New Year!'/><br/>
      <Post message = 'Ehohoho'/><br/>
   </div>

}

export default MyPosts;