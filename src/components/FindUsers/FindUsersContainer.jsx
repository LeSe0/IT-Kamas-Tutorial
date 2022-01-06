import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import FindUsers from './FindUsers'

class FindUserscontainer extends React.Component{
    render(){return <FindUsers/>}
}

function State(state){return{}}

export default compose(
    withAuthRedirect,
    connect(State  , {}),
)(FindUserscontainer)