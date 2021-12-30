import React from 'react'
import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC, totalUsersAC, selectPageAC, toggleIsFetching } from '../../../Redux/fUsers-reducer';
import * as axios from "axios";
import Users from './Users.jsx'
import c from './Users.module.css'
import Preloader from '../../common/Preloader.jsx'

class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.initialPage}&count=${this.props.usersCount}`).then(response =>{
            this.props.toggleIsFetching(false)  
            this.props.setUsersTotal(response.data.totalCount)
            this.props.setUsers(response.data.items);
        })
    }

    changePage(page){
        this.props.toggleIsFetching(true)
        this.props.selectPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersCount}`).then(response =>{
            this.props.toggleIsFetching(false)  
            this.props.setUsersTotal(response.data.totalCount)
            this.props.setUsers(response.data.items);
        })
    }

    render(){ 
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsers = {this.props.totalUsers}
               usersCount = {this.props.usersCount}
               changePage = {this.changePage.bind(this)}
               initialPage = {this.props.initialPage}
               users = {this.props.users}
               unFollow = {this.props.unFollow}
               follow = {this.props.follow}
               pagesMargin = {this.props.pagesMargin}
               pagesCountOS = {this.props.pagesFSlice}
               /></>
    }
}


function State(state){
    return {
        users : state.findUsers.users,
        usersCount : state.findUsers.usersCount,
        initialPage : state.findUsers.initialPage,
        totalUsers : state.findUsers.totalUsers,
        isFetching : state.findUsers.isFetching,
        pagesMargin : state.findUsers.pagesMargin,
        pagesFSlice : state.findUsers.pagesFSlice
    }
}

function Method(dispatch){
    return {
        follow : (userId) =>{dispatch(followAC(userId))},
        unFollow : (userId) =>{dispatch(unFollowAC(userId))},
        setUsers : (users) => {dispatch(setUsersAC(users))},
        setUsersTotal : (usersTotal) =>{dispatch(totalUsersAC(usersTotal))},
        selectPage : (page) =>{dispatch(selectPageAC(page))},
        toggleIsFetching : (count) =>{dispatch(toggleIsFetching(count))}
    }
}

export default connect(State , Method)(UsersContainer)