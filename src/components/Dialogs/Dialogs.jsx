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
            <div className={classes.messages}>
                {messagesElem}
                <div className={classes.sendMessage}>
                    <textarea name="" id="" cols="90" rows="3"></textarea>
                    <button className={classes.button}>Send</button>
                </div>

            </div>

        </div>
    )
}

export default Dialogs;