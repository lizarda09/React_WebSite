import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";

 const Profile = () => {
     return  <div className={classes.content}>
         <div>
             <img className={classes.img} src="https://look.com.ua/pic/201510/1366x768/look.com.ua-134629.jpg" alt=""/>
             <MyPosts />
         </div>
     </div>
 }

 export default Profile;