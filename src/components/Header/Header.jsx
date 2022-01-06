import React, {useState} from 'react'
import '../../App.css'
import c from './Header.module.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

function Header(props){

    return (
        <header>
            <div className = {c.header__text}>Logistic</div>
            <div className={c.authContainer}>
                {props.isAuth ? 
                    <div className={c.userInfo}>
                        <span className={c.logged}>{props.login}</span> 
                        <button onClick={props.logout} className={c.logout}><i className={`fas fa-sign-out-alt ${c.icon}`}></i></button>
                    </div>
                    : <NavLink to = {`/login`} className = {c.navItem}>Log in</NavLink>}
            </div>
        </header>
    )
}

export default Header