import Messages from './Messages.jsx'
import { connect } from 'react-redux'
import { messageActionCreator } from '../../../../Redux/dialog-reducer.js'

function State(state){
    return {
        messages : state.dialogsPage.messages
    }
}

const MessagesContainer = connect(State , {messageActionCreator})(Messages)

export default MessagesContainer