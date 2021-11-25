import React, {useState} from 'react'
import c from './MyPosts.module.css'

function MyPosts(props){
    return (
        <div className = {c.myPosts}>
            {props.posts.map((el , i) =>{
                return (
                  <div className = {c.post__item}>
                    <div className = {c.postPhoto}><img src={el.img} alt="" /></div>
                    <div className = {c.postInnerCont}>{el.postInner}</div>
                    <div className = {c.actions}>
                      <div className = {c.action}><i className={`fas fa-heart ${c.likes}`}></i><span>{el.likes}</span></div>
                      <div className = {c.action}><i className={`fas fa-share ${c.shares}`}></i><span> {el.shares}</span></div>
                    </div>
                  </div>
                )
            })}
        </div>
    )
}

export default MyPosts