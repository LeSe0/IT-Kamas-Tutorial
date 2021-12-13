import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import c from './Persons.module.css'

function Persons(props){
    return (
        <div className ={c.persons}>
            <form className = {c.searchInpContainer} onSubmit = {(e) =>{
                e.preventDefault();
            }}>
                <button type="submit" className = {c.submitButton}><i className={`fas fa-search ${c.search__item} ${c.search__icon}`}></i></button>
                <input type="search" name="" id="" className = {`${c.search__item} ${c.searchInp}`} placeholder = "Search dialog partner?"/>
            </form>
            {props.persons.map((el , i) =>{
                return (
                    <NavLink to = {`/Dialogs/person${el.id}`} activeClassName = {c.active} onClick = {(e) =>{
                    }}
                    key = {el.id}>
                        <div className = {c.personItem}>{el.name}</div>
                    </NavLink>
                )
            })}
        </div>
    )
}

export default Persons