import React from "react"
import c from './FormControl.module.css'

export const TextArea = ({input , meta, ...props}) =>{
    return <>
        <div className={c.newTextArea}>
            <div className={c.errorContainer}>
                {meta.error && meta.touched ? <span>{meta.error}</span> : null} 
            </div>
            <div className={c.textAreaContainer}>                
                <textarea {...input} className={meta.error && meta.touched ? `${c.messageTextArea} ${c.error}` : c.messageTextArea} placeholder={props.placeholder}/>    
                <input type="submit" value="Send"/>
            </div>
        </div>
    </>
}

export const Input = ({input , meta , ...props}) =>{
    return <>
        <div className={c.logIn}>
            <div className={c.logInputContainer}>    
                <span className={c.username}><i className={props.icon}></i></span>            
                <input {...input} className={meta.error && meta.touched ? `${c.logInput} ${c.error}` : c.logInput} placeholder={props.placeholder}
                        type={props.type}/>  
            </div>
            {<div className={meta.error && meta.touched ? c.logInError : c.disabled}>{meta.error}</div>}    
        </div>
    </>
}