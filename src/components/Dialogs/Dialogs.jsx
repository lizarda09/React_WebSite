import React from 'react';
import classes from './Dialogs.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {

    let dialogElem = props.dialogs.map(dialog => {
        return <DialogItem id={dialog.id} name={dialog.name}/>
    });

    let messagesElem = props.messages.map(message => {
        return <MessageItem message={message.mess}/>
    });

    return (
        <div className={classes.dialogs}>
            <div className="dialog_items">
                {dialogElem}
            </div>
            <div className="messages">
                {messagesElem}
            </div>
        </div>
    )
}

export default Dialogs;