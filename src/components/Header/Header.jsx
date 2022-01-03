import React, {useState} from 'react'
import '../../App.css'
import c from './Header.module.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

function Header(props){
    return (
        <header>
            <div className = {c.header__text}>Logistic</div>
            <div className={c.authContainer}>
                {props.isAuth ? <span className={c.logged}>{props.login}</span> 
                    : <NavLink to = {`/login`} className = {c.navItem} onClick = {() =>{
                        props.signIn()
                    }}>Log in</NavLink>}
            </div>
        </header>
    )
}

export default Header