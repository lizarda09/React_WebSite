import React from 'react';
import classes from './MyPosts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = () => {
   let postData = [
      {id:1, postValue: 'Hello, how are you?'},
      {id:2, postValue: 'Merry X-mas and Happy New Year!'},
      {id:3, postValue: 'Ehohohovv'},
      {id:4, postValue: 'Hello, I am the forth!'}
   ];

   let postElem = postData.map(post => {
      return <Post message={post.postValue}/>
   });

   return <div>
      <NewPost />
      {postElem}
      {/*
      <Post message = {postData[0].postValue}/><br/>
      <Post message = {postData[1].postValue}/><br/>
      <Post message = {postData[2].postValue}/><br/>
      */}
   </div>

}

export default MyPosts;