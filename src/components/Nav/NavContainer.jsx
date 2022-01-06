import React, {useState} from 'react'
import { connect } from 'react-redux'
import '../../App.css'
import Nav from './Nav'

// function NavContainer(){
//     return (
//         <StoreContext.Consumer>{
//                 (store) =>{
//                     return <nav>
//                         {store.getState().navbar.map((el , i) =>{
//                             return <NavLink to = {el.navTo} activeClassName = {c.active}>
//                                 <div className = {c.nav__item}>{el.navButton}</div>
//                             </NavLink>
//                         })}
//                     </nav>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

function State(state){
    return {
        navbar : state.navbar
    }
}

const NavContainerRR = connect(State , {})(Nav)

export default NavContainerRR