import {rerenderTree} from "../render";

let state = {
    profilePage:{
        postData : [
            {id:1, postValue: 'Hello, how are you?'},
            {id:2, postValue: 'Merry X-mas and Happy New Year!'},
            {id:3, postValue: 'Ehohohovv'},
            {id:4, postValue: 'Hello, I am the forth!'},
            {id:5, postValue: 'That is good!'}
        ]
    },
    dialogPage:{
        dialogData : [
            {id:1, name: "Liza"},
            {id:2, name: "Katya"},
            {id:3, name: "Masha"},
            {id:4, name: "Dima"},
            {id:5, name: "Vasya"},
            {id:6, name: "Kiril"}
        ],
        messagesData : [
            {id:1, mess: "Lua"},
            {id:2, mess: "Privet"},
            {id:3, mess: "Kak tu"},
            {id:4, mess: "Tyya"}
        ]
    }
};
export let addPost = (post) =>{
    let postOnClick = {
        id: 6,
        postValue: post
    };

    state.profilePage.postData.push(postOnClick);

    rerenderTree(state);
}

export default state;
