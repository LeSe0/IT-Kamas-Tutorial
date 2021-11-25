import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Messages from './DialogComponents/Messages/Messages'
import Persons from './DialogComponents/Persons/Persons'
import c from './Dialogs.module.css'

function Dialogs(props){
    let data = props.store.getState().dialogsPage
    return (
        <div className = {c.dialogs}>
            <Persons personData = {data.persons}/>
            <Messages store = {props.store}/>
        </div>
    )
}

export default Dialogs