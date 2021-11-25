import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import c from './Messages.module.css'
import MessageFormContainer from './MessagesComponent/MessageFormContainer'

function Messages(props){
    let data = props.store.getState().dialogsPage
    return (
        <div className = {c.messages}>
            <div className = {c.messagesCont}>
                {data.dialog.messages.map((el , i) =>{
                    return (
                        <div className = {c.message__item}>
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
                <MessageFormContainer store = {props.store}/>
            </div>
        </div>
    )
}

export default Messages