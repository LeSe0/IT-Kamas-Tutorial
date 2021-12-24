import React from 'react'
import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC, totalUsersAC, selectPageAC } from '../../../Redux/fUsers-reducer';
import Users from './Users';

function State(state){
    return {
        users : state.findUsers.users,
        usersCount : state.findUsers.usersCount,
        initialPage : state.findUsers.initialPage,
        totalUsers : state.findUsers.totalUsers,
    }
}

function Method(dispatch){
    return {
        followAC : (userId) =>{dispatch(followAC(userId))},
        unFollowAC : (userId) =>{dispatch(unFollowAC(userId))},
        setUsers : (users) => {dispatch(setUsersAC(users))},
        setUsersTotal : (usersTotal) =>{dispatch(totalUsersAC(usersTotal))},
        selectPage : (page) =>{dispatch(selectPageAC(page))}
    }
}

const UsersContainer = connect(State , Method)(Users)

export default UsersContainer