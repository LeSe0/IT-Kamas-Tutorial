import React from 'react'
import { connect } from 'react-redux';
import { follow, addUsers, unFollow, setTotalUsers, selectPage, toggleIsFetching, toggleIsFollowing, followingInProcess } from '../../../Redux/fUsers-reducer';
import * as axios from "axios";
import Users from './Users.jsx'
import Preloader from '../../common/Preloader.jsx'
import { usersAPI } from '../../../api/api';

class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.initialPage , this.props.usersCount).then(response =>{
            this.props.toggleIsFetching(false)  
            this.props.setTotalUsers(response.totalCount)
            this.props.addUsers(response.items);
        })
    }

    changePage(page){
        this.props.toggleIsFetching(true)
        this.props.selectPage(page);
        usersAPI.getUsers(page , this.props.usersCount).then(response =>{
            this.props.toggleIsFetching(false)  
            this.props.setTotalUsers(response.totalCount)
            this.props.addUsers(response.items);
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
               followingInProcess = {this.props.followingInProcess}
               followInReq = {this.props.followInReq}
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
        pagesFSlice : state.findUsers.pagesFSlice,
        followInReq : state.findUsers.followInReq
    }
}

export default connect(State , {
    follow,
    unFollow,
    addUsers,
    setTotalUsers,
    selectPage,
    toggleIsFetching,
    followingInProcess
})(UsersContainer)