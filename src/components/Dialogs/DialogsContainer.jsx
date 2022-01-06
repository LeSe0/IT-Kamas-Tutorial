import React from 'react'
import { connect } from 'react-redux'
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class DialogsContainer extends React.Component{
    render(){
        return (
            <Dialogs/>
        )
    }
}

function State(state){
    return {
    }
}

export default compose(
    withAuthRedirect,
    connect(State , {}),
)(DialogsContainer)