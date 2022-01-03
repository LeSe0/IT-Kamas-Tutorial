import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import * as axios from "axios";
import { setUserData } from '../../Redux/auth-reducer';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component{

    componentDidMount(){
        usersAPI.auth().then(response =>{
            if(response.resultCode === 0){
                let {id , email , login} = response.data
                this.props.setUserData(id , email, login)
            }
        })
    }

    signIn(){
        usersAPI.auth().then(response =>{
            let {id , email , login} = response.data
            this.props.setUserData(id , email, login)
        })
    }

    render(){
        return (
            <Header {...this.props} signIn = {this.signIn}/>
        )
    }
}

function State(state){
    return {
        ...state.auth
    }
}

export default connect(State , {
    setUserData
})(HeaderContainer)