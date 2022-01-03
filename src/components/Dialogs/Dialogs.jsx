import React from 'react'
import MessagesContainer from './DialogComponents/Messages/MessagesContainer'
import PersonsContainer from './DialogComponents/Persons/PersonsContainer'
import c from './Dialogs.module.css'

function Dialogs(){
    return (
        <div className = {c.dialogs}>
            <PersonsContainer/>
            <MessagesContainer/>
        </div>
    )
}

export default Dialogs