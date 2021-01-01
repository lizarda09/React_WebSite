import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={classes.dialog}>
        <NavLink to={"/messages/"+props.id}>{props.name}</NavLink>
    </div>
}
const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className="dialog_items">
                <DialogItem id="1" name="Liza"/>
                <DialogItem id="2" name="Katya"/>
                <DialogItem id="3" name="Masha"/>
                <DialogItem id="4" name="Dima"/>
            </div>
            <div className="messages">
                <div className={classes.mess}>Hello</div>
                <div className={classes.mess}>Yo</div>
                <div className={classes.mess}>Kek</div>
            </div>
        </div>


    )
}

export default Dialogs;