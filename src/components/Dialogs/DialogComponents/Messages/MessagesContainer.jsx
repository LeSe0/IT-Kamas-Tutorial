import Messages from './Messages.jsx'
import { connect } from 'react-redux'

function State(state){
    return {
        messages : state.dialogsPage.messages
    }
}

function Methods(body){
    return {

    }
}

const MessagesContainer = connect(State , Methods)(Messages)

export default MessagesContainer