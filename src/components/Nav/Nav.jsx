import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../../App.css'
import c from './Nav.module.css'

function Nav(props){
    return (
        <nav>
            {props.navbar.map((el , i) =>{
                return <NavLink to = {el.navTo} activeClassName = {c.active}>
                    <div className = {c.nav__item}>{el.navButton}</div>
                </NavLink>
            })}
        </nav>
    )
}

export default Nav