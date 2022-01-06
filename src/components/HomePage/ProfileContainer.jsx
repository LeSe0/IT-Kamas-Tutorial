import React from 'react'
import { connect } from 'react-redux';
import { getProfileInfo,getStatus,updateStatus, createPost } from '../../Redux/profile-reducer.js';
import Profile from './Profile';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';
import { getUserInfo , getContactIcons, getLoggedStatus , getLoggedUserId} from '../../Redux/profile-selector.js';

class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId
        this.props.getProfileInfo(userId , this.props.loggedUserId);
        this.props.getStatus(userId , this.props.loggedUserId);
    }

    render(){
        return <>
            <Profile 
                status = {this.props.status}
                name = {this.props.userInfo.fullName}
                contacts = {{...this.props.userInfo.contacts}}
                lookingForAJob = {this.props.userInfo.lookingForAJob}
                lookingForAJobDescription = {this.props.userInfo.lookingForAJobDescription}
                photos = {{...this.props.userInfo.photos}}
                contactIcons = {[...this.props.contactIcons]}
                aboutMe = {this.props.userInfo.aboutMe}
                updateStatus = {this.props.updateStatus}
                createPost = {this.props.createPost}
            />
        </>
    }
}

function State(state){
    return {
        userInfo : getUserInfo(state) ,
        contactIcons : getContactIcons(state),
        status : getLoggedStatus(state),
        loggedUserId : getLoggedUserId(state),
    }
}

export default compose(
    withAuthRedirect,
    connect(State , {getProfileInfo, getStatus, updateStatus, createPost}),
    withRouter,
)(ProfileContainer)