import React from "react";
import c from './UsersRender.module.css'
import { NavLink } from 'react-router-dom'

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
                                    el.followed == true ? props.unfollow(el.id): props.follow(el.id)
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