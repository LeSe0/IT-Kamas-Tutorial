import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import FindUsers from './FindUsers'

class FindUserscontainer extends React.Component{
    render(){return <FindUsers/>}
}

export default compose(
    connect(null  , {}),
)(FindUserscontainer)