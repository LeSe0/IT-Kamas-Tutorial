import React, {useState} from 'react'
import { postActionCreator , newTextActionCreator } from '../../../Redux/profile-reducer';
import Posts from './Posts';

function PostsContainer(props){
    let data = props.store.getState().homePage
    let el = React.createRef();

    let newPost = () =>{
        // let text = props.newPostText;
        // props.addPost()
        props.store.dispatch(postActionCreator());
    }

    let onPostChange = (text) =>{
        props.store.dispatch(newTextActionCreator(text));
    }

    return (
        <Posts updateNewPostText = {onPostChange} addPost = {newPost} post = {data.posts} newPostText = {data.newPostText}/>
    )
}

export default PostsContainer
