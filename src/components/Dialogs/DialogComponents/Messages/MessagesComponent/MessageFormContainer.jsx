import { messageTextActionCreator, messageActionCreator } from '../../../../../Redux/dialog-reducer';
import MessageForm from './MessageForm';
import { connect } from 'react-redux';

// function MessageFormContainer(props){
//     let data = props.store.getState().dialogsPage
//     let textForm = React.createRef();

//     let addMessage = () =>{
//         let text = data.newMessageText;
//         props.store.dispatch(messageActionCreator())
//     }

//     let addMessageChanges = (text) =>{
//         props.store.dispatch(messageTextActionCreator(text));
//     }

//     return (
//         <MessageForm addMessage = {addMessage} addMessageChanges = {addMessageChanges} newMessageText = {data.newMessageText}/>
//     )
// }


let State = (state) =>{
    return {
        newMessageText : state.dialogsPage.newMessageText,
    }
}

let Methods = (dispatch) =>{
    return {
        addMessageChanges : (text) =>{
            dispatch(messageTextActionCreator(text))
        },
        addMessage : () =>{
            dispatch(messageActionCreator())
        },
    }
}

const MessageFormContainer = connect(State , Methods)(MessageForm)

export default MessageFormContainer