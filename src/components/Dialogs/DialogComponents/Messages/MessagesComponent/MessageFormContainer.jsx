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
    }
}

const MessageFormContainer = connect(State , {})(MessageForm)

export default MessageFormContainer