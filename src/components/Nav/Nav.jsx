import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../App.css'
import c from './Nav.module.css'

function Nav(props){
    return (
        <nav className = {c.navBar}>
            <div className = {c.container}>
                {props.navbar.map((el , i) =>{
                    return <NavLink to = {el.navTo} activeClassName = {c.active} key = {i}>
                        <div className = {c.nav__item}>{el.navButton}</div>
                    </NavLink>
                })}
            </div>
        </nav>
    )
}

export default Nav