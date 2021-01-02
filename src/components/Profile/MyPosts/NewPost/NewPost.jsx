import React from 'react';
import classes from './NewPost.module.css';



const NewPost = () => {

   let newPostElement = React.createRef();

   let addNewPost = () => {
      let value = newPostElement.current.value;
      alert(value);
    }

    return <div className={classes.post}>
        <textarea  ref={newPostElement} name="" placeholder="What happend?" cols="110" rows="4"></textarea>
        <button onClick={()=>addNewPost()} className={classes.button}>Post</button>
    </div>
}

export default NewPost;