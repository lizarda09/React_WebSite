import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {id:1, postValue: 'Hello, how are you?'},
    {id:2, postValue: 'Merry X-mas and Happy New Year!'},
    {id:3, postValue: 'Ehohohovv'},
    {id:4, postValue: 'Hello, I am the forth!'}
];
let dialogData = [
    {id:1, name: "Liza"},
    {id:2, name: "Katya"},
    {id:3, name: "Masha"},
    {id:4, name: "Dima"},
    {id:5, name: "Vasya"}
];
let messagesData = [
    {id:1, mess: "Lua"},
    {id:2, mess: "Privet"},
    {id:3, mess: "Kak tu"},
    {id:4, mess: "Tyya"}
];


ReactDOM.render(
  <React.StrictMode>
    <App posts={postData} dialogs={dialogData} messages={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
