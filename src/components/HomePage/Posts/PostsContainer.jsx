import React from 'react'
import { connect } from 'react-redux';
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
    }
}

const PostsContainer = connect(State , {})(Posts)

export default PostsContainer
