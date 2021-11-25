import React, {useState} from 'react'
import '../../../App.css'
import { postActionCreator , newTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts/MyPosts'
import c from './Posts.module.css'

function Posts(props){
    let el = React.createRef();

    let newPost = () =>{
        props.addPost()
    }

    let onPostChange = () =>{
        let text = el.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className = {c.postField}>
            <form className = {c.postForm} onSubmit = {(e) =>{
                    e.preventDefault();
                    newPost()
                }
            }>
                <textarea placeholder = "Something new..." className = {c.postTextInput} ref = {el} value = {props.newPostText} onChange = {onPostChange}/>
                <input type="submit" value="Add" className = {c.postSubmitInput}/>
            </form>
            <div className = {c.myPosts}>
                <MyPosts posts = {props.post}/>
            </div>
        </div>
    )
}

export default Posts