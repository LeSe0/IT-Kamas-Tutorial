import React from 'react'
import { connect } from 'react-redux';
import { unfollowThunk, followThunk, requestUsers } from '../../../Redux/fUsers-reducer';
import Users from './Users.jsx'
import Preloader from '../../common/Preloader.jsx'
import {getUsers , getUsersCount , getInitialPage , getTotalUsers , getIsFetching , getPagesMargin , getFollowInReq , getPagesFSize} from '../../../Redux/users-selector.js'

class UsersContainer extends React.Component{
    componentDidMount(){
       this.props.requestUsers(this.props.initialPage , this.props.usersCount)
    }

    changePage(page){
        this.props.requestUsers(page , this.props.usersCount)
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
        users : getUsers(state),
        usersCount : getUsersCount(state),
        initialPage : getInitialPage(state),
        totalUsers : getTotalUsers(state),
        isFetching : getIsFetching(state),
        pagesMargin : getPagesMargin(state),
        pagesFSlice : getPagesFSize(state),
        followInReq :getFollowInReq(state)
    }
}

export default connect(State , {
    followThunk,requestUsers, unfollowThunk
})(UsersContainer)