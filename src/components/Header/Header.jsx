import React, {useState} from 'react'
import '../../App.css'
import c from './Header.module.css'

function Header(){
    return (
        <header>
            <div className = {c.header__text}>Logistic</div>
        </header>
    )
}

export default Header