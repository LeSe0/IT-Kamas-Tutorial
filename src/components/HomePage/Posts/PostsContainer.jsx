import { connect } from 'react-redux';
import Posts from './Posts';
import { getPosts } from '../../../Redux/profile-selector';
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
        post : getPosts(state),
    }
}

const PostsContainer = connect(State , null)(Posts)

export default PostsContainer
