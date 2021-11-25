import React, {useState} from 'react'
import '../../App.css'
import c from './Home.module.css'
// import Posts from './Posts/Posts'
import PostsContainer from './Posts/PostsContainer'

function HomePage(props){
    let data = props.store.getState()
    return (
        <div className = {c.content}>
            <div className = {c.wallpaperChoose}>Choose your wallpaper</div>
            <div className = {c.userInfo}>
                <img src={data.homePage.userInfo.img} alt="" className = {c.profilePhoto}/><br />
                ID : {data.homePage.userInfo.id},<br />
                Thread : {`${data.homePage.userInfo.firstName} ${data.homePage.userInfo.secondName}`},<br />
                Country : {data.homePage.userInfo.country},<br />
                City : {data.homePage.userInfo.city}.<br />
            </div>
            <div className = {c.posts}>
                <PostsContainer store = {props.store}/>
            </div>
        </div>
    )
}

export default HomePage