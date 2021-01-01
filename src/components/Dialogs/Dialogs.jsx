import React from 'react';
import classes from './Dialogs.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {

    let dialogData = [
        {id:1, name: "Liza"},
        {id:2, name: "Katya"},
        {id:3, name: "Masha"},
        {id:4, name: "Dima"}
    ];

    let messagesData = [
        {id:1, mess: "Lua"},
        {id:2, mess: "Privet"},
        {id:3, mess: "Kak tu"},
        {id:4, mess: "Tyya"}
    ];

    let dialogElem = dialogData.map(dialog => {
        return <DialogItem id={dialog.id} name={dialog.name}/>
    });

    let messagesElem = messagesData.map(message => {
        return <MessageItem message={message.mess}/>
    });

    return (
        <div className={classes.dialogs}>
            <div className="dialog_items">
                {dialogElem}
                {/*
                <DialogItem id={dialogData[0].id} name={dialogData[0].name}/>
                <DialogItem id={dialogData[1].id} name={dialogData[1].name}/>
                <DialogItem id={dialogData[2].id} name={dialogData[2].name}/>
                <DialogItem id={dialogData[3].id} name={dialogData[3].name}/>
                */}
            </div>
            <div className="messages">

                {messagesElem}
                {/*
                <MessageItem message={messagesData[0].mess}/>
                <MessageItem message={messagesData[1].mess}/>
                <MessageItem message={messagesData[2].mess}/>
                */}
            </div>
        </div>
    )
}

export default Dialogs;