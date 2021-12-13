import React, {useState} from 'react'
import '../../App.css'
import c from './Home.module.css'
// import Posts from './Posts/Posts'
import PostsContainer from './Posts/PostsContainer'

function HomePage(){
    return (
        <div className = {c.content}>
            <div className = {c.wallpaperChoose}>Choose your wallpaper</div>
            <div className = {c.userInfo}>
                <img src='https://maxcdn.icons8.com/Share/icon/nolan/Users/user_male1600.png' alt="" className = {c.profilePhoto}/><br />
                ID : LeSeo,<br />
                Thread : Levon Stepanyan,<br />
                Country : Armenia,<br />
                City : Ararat.<br />
            </div>
            <div className = {c.posts}>
                <PostsContainer/>
            </div>
        </div>   
    )
}

export default HomePage