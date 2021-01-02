import React from 'react';
import classes from './NewPost.module.css';

const NewPost = () => {
    return <div className={classes.post}>
        <textarea  name="" placeholder="What happend?" cols="110" rows="4"></textarea>
        <button className={classes.button}>Post</button>
    </div>
}

export default NewPost;