import React from 'react'
import c from './FindUsers.module.css'
import UsersContainer from './componentsFUsers/UsersContainer'

function FindUsers(){
    return (
        <div className = {c.findUsers_container}>
            <div className = {c.title}>Users</div>
            <UsersContainer />
        </div>
    )
}

export default FindUsers