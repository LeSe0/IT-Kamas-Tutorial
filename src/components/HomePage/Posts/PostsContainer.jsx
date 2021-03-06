import React from 'react'
import { connect } from 'react-redux';
import { postActionCreator , newTextActionCreator } from '../../../Redux/profile-reducer';
import Posts from './Posts';

// function PostsContainer(props){
//     let data = props.store.getState().homePage

//     let newPost = () =>{
//         // let text = props.newPostText;
//         // props.addPost()
//         props.store.dispatch(postActionCreator());
//     }

//     let onPostChange = (text) =>{
//         props.store.dispatch(newTextActionCreator(text));
//     }

//     return (
//         <Posts updateNewPostText = {onPostChange} 
//             addPost = {newPost} post = {data.posts} 
//             newPostText = {data.newPostText}/>
//     )
// }

function State(state){
    return {
        post : state.homePage.posts,
        newPostText : state.homePage.newPostText
    }
}

function Methods(dispatch){
    return {
        updateNewPostText : (body) =>{dispatch(newTextActionCreator(body))},
        addPost : () =>{dispatch(postActionCreator())}
    }
}

const PostsContainer = connect(State , Methods)(Posts)

export default PostsContainer
