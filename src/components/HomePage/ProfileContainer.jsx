import React from 'react'
import { connect } from 'react-redux';
import { setProfileData } from '../../Redux/profile-reducer.js';
import * as axios from "axios";
import Profile from './Profile';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { usersAPI } from '../../api/api.js';

class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        usersAPI.getUserInfo(userId).then(response =>{
            this.props.setProfileData(response)
        })
    }

    render(){
        return <>
            <Profile 
                name = {this.props.fullName}
                aboutMe = {this.props.aboutMe}
                contacts = {{...this.props.contacts}}
                lookingForAJob = {this.props.lookingForAJob}
                lookingForAJobDescription = {this.props.lookingForAJobDescription}
                photos = {{...this.props.photos}}
                contactIcons = {[...this.props.contactIcons]}    
            />
        </>
    }
}

function State(state){
    return {
        ...state.homePage.userInfo,
        contactIcons : state.homePage.contactIcons
    }
}

let GetURLData = withRouter(ProfileContainer)

export default connect(State , {setProfileData})(GetURLData)