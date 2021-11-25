import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { messageTextActionCreator, messageActionCreator } from '../../../../../Redux/dialog-reducer';
import MessageForm from './MessageForm';

function MessageFormContainer(props){
    let data = props.store.getState().dialogsPage
    let textForm = React.createRef();

    let addMessage = () =>{
        let text = data.newMessageText;
        props.store.dispatch(messageActionCreator())
    }

    let addMessageChanges = (text) =>{
        props.store.dispatch(messageTextActionCreator(text));
    }

    return (
        <MessageForm addMessage = {addMessage} addMessageChanges = {addMessageChanges} newMessageText = {data.newMessageText}/>
    )
}

export default MessageFormContainer