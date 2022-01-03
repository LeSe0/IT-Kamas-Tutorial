import React from "react";
import c from './UsersRender.module.css'
import { NavLink } from 'react-router-dom'
import axios from "axios";
import { followAPI } from "../../../../../api/api";

function UsersRender(props){
    return <>
        {props.users.map((el , i) =>{
            return (
                <div className={c.user}>
                    <div className={c.firstPart}>
                        <NavLink to = {'/profile/' + el.id}>
                            <div className = {c.img}><img className = {c.avatar}
                                src = {el.photos.small == null ? 
                                'https://www.pngarts.com/files/11/Avatar-PNG-High-Quality-Image.png' : el.photos.small}/>
                            </div>
                        </NavLink>
                        <button className = {el.followed == true ? c.unFollow : c.follow} disabled = {props.followInReq.some(id =>{return id === el.id})}
                                onClick = {() =>{
                                    el.followed == true ?
                                    followAPI.unfollowRequest(el.id, props.followingInProcess)
                                        .then(response =>{
                                            if(response.resultCode === 0){
                                                props.unfollow(el.id)
                                                props.followingInProcess(false, el.id)
                                            }
                                        }) : 
                                    followAPI.followRequest(el.id, props.followingInProcess)
                                        .then(response =>{
                                            if(response.resultCode === 0){
                                                props.follow(el.id)
                                                props.followingInProcess(false, el.id)
                                            }
                                        }) 
                                }}
                            >
                            {el.followed == true ? 'Unfollow' : 'Follow'}
                        </button>
                    </div>
                    <div className = {c.secondPart}>
                        <div className = {c.personInfo}>
                            <div className={c.userName}>{el.name}</div>
                            <div className = {c.comment}>{el.status}</div>
                        </div>
                        <div className = {c.location}>
                            <div className = {c.country}>Armenia,</div>
                            <div className = {c.city}>Ararat</div>
                        </div>
                    </div>
                </div>
            )
            })}
    </>
}

export default UsersRender