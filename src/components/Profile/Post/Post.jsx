import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return <div className={classes.post}>
        <img className={classes.ava} src="https://otvetnavse.com/wp-content/uploads/2017/11/fd6a31a390b08009bd38141bf8ba41e7.jpg" alt=""/>
        <span className={classes.text}>
            {props.message}
        </span>
        <button className={classes.like}>
          Like&#128077;
        </button>
        <button className={classes.dislike}>
            Dislike&#128078;
        </button>
    </div>
}

export default Post;