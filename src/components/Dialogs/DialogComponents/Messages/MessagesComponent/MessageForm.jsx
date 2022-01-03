import React from 'react'
import c from './MessageForm.module.css'
import cs from '../Messages.module.css'

function MessageForm(props){
    let textForm = React.createRef();

    let newMessageAdd = () =>{
        props.addMessage();
    }

    let onMessageChange = () =>{
        let text = textForm.current.value;
        props.addMessageChanges(text)
    }

    return (
        <form className = {`${c.messageForm} ${cs.messageForm}`} onSubmit = {(e) => {
            e.preventDefault();
            newMessageAdd()
        }}>
            <textarea ref = {textForm}
                value = {props.newMessageText}
                className = {c.messageTextArea} 
                placeholder = 'Wanna say anything to your friend?' 
                maxLength = '500'
                onChange = {onMessageChange}
                required ={true}></textarea>
            <input type="submit" value="Send"/>
        </form>
    )
}

export default MessageForm