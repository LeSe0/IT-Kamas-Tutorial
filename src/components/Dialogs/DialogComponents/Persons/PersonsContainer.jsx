import { connect } from 'react-redux'
import Persons from './Persons'

function State(state){
    return {
        persons : state.dialogsPage.persons
    }
}

function Methods(dispatch){
    return {

    }
}

const PersonsContainer = connect(State , Methods)(Persons)

export default PersonsContainer