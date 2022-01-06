import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import { login } from '../../Redux/auth-reducer'

class LoginContainer extends React.Component{

    render(){
        return (
            <Login login = {this.props.login} isAuth = {this.props.isAuth}/>
        )
    }
}

function State(state){
    return {
        isAuth : state.auth.isAuth
    }
}

export default connect(State , {login})(LoginContainer)