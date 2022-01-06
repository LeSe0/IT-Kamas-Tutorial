import React from 'react'
import c from './Messages.module.css'
import MessageFormContainer from './MessagesComponent/MessageFormContainer'

function Messages(props){
    let onSubmit = (data) =>{
        props.messageActionCreator(data.newMessage)
    }

    return (
        <div className = {c.messages}>
            <div className = {c.messagesCont}>
                {props.messages.map((el , i) =>{
                    return (
                        <div className = {c.message__item} key = {el.id}>
                            <div className = {c.message__img}> <img src= {el.img} alt="" /></div>
                            <div className = {c.theMessage}>
                                <div>{el.message}</div>
                            </div>
                            <div className = {c.messageSendTime}>{el.time}</div>
                        </div>
                    )
                })}
            </div>
            <div className = {c.messageFormContainer}>
                <MessageFormContainer onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Messages