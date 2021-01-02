import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./state/state";

export let rerenderTree = (state) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App addPost={addPost} posts={state.profilePage.postData} dialogs={state.dialogPage.dialogData} messages={state.dialogPage.messagesData}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
