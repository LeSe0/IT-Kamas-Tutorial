import React from 'react'
import { connect } from 'react-redux';
import { unfollowThunk, followThunk, getUsers } from '../../../Redux/fUsers-reducer';
import Users from './Users.jsx'
import Preloader from '../../common/Preloader.jsx'

class UsersContainer extends React.Component{
    componentDidMount(){
       this.props.getUsers(this.props.initialPage , this.props.usersCount)
    }

    changePage(page){
        this.props.getUsers(page , this.props.usersCount)
    }

    render(){
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsers = {this.props.totalUsers}
               usersCount = {this.props.usersCount}
               changePage = {this.changePage.bind(this)}
               initialPage = {this.props.initialPage}
               users = {this.props.users}
               unFollow = {this.props.unfollowThunk}
               follow = {this.props.followThunk}
               pagesMargin = {this.props.pagesMargin}
               pagesCountOS = {this.props.pagesFSlice}
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
    followThunk,getUsers, unfollowThunk
})(UsersContainer)