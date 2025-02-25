import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div >
        <NavLink className={classes.dialog} to={"/messages/"+props.id}>{props.name}</NavLink>
    </div>
}

export default DialogItem;