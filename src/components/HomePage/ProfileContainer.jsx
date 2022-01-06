import React from 'react'
import { connect } from 'react-redux';
import { getProfileInfo,getStatus,updateStatus, createPost } from '../../Redux/profile-reducer.js';
import Profile from './Profile';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import {withAuthRedirect} from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';

class ProfileContainer extends React.Component{
    componentDidMount(){
        this.props.getProfileInfo(this.props.match.params.userId);
        this.props.getStatus(this.props.match.params.userId);
    }

    render(){
        return <>
            <Profile 
                status = {this.props.status}
                name = {this.props.fullName}
                contacts = {{...this.props.contacts}}
                lookingForAJob = {this.props.lookingForAJob}
                lookingForAJobDescription = {this.props.lookingForAJobDescription}
                photos = {{...this.props.photos}}
                contactIcons = {[...this.props.contactIcons]}
                aboutMe = {this.props.aboutMe}
                updateStatus = {this.props.updateStatus}
                createPost = {this.props.createPost}
            />
        </>
    }
}

function State(state){
    return {
        ...state.homePage.userInfo,
        contactIcons : state.homePage.contactIcons,
        status : state.homePage.status
    }
}

export default compose(
    withAuthRedirect,
    connect(State , {getProfileInfo, getStatus, updateStatus, createPost}),
    withRouter,
)(ProfileContainer)