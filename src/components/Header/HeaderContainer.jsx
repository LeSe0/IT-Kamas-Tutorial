import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { logout } from '../../Redux/auth-reducer';

class HeaderContainer extends React.Component{

    render(){
        return (
            <Header {...this.props} logout = {this.props.logout}/>
        )
    }
}

function State(state){
    return {
        ...state.auth
    }
}

export default connect(State , {
    logout
})(HeaderContainer)