import React from 'react'
import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC } from '../../../Redux/fUsers-reducer';
import Users from './Users';

function State(state){
    return {
        users : state.findUsers.users
    }
}

function Method(dispatch){
    return {
        followAC : (userId) =>{dispatch(followAC(userId))},
        unFollowAC : (userId) =>{dispatch(unFollowAC(userId))},
        setUsers : (users) => {dispatch(setUsersAC(users))},
    }
}

const UsersContainer = connect(State , Method)(Users)

export default UsersContainer