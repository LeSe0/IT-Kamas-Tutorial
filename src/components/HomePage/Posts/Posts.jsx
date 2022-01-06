import React from 'react'
import '../../../App.css'
import MyPosts from './MyPosts/MyPosts'
import c from './Posts.module.css'
import {reduxForm, Field} from 'redux-form'
import { maxLengthCreator , required } from '../../../utils/validators/validator'
import { TextArea } from '../../common/FormControl'

let maxLength = maxLengthCreator(10)

function Posts(props){
    return (
        <div className = {c.postField}>
            <div className={c.title}> Posts</div>
            <form className = {c.postForm} onSubmit={props.handleSubmit}>
                <Field component = {TextArea} placeholder = "Something new..." className = {c.postTextInput} 
                    value = {props.newPostText}
                    validate = {[required , maxLength]} name = 'postText'/>
            </form>
            <div className = {c.myPosts}>
                <MyPosts posts = {props.post}/>
            </div>
        </div>
    )
}

export default reduxForm({
    form : 'profilePost'
})(Posts)